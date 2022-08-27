import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Input from './Input';
import Button from './Button';
import { setNotes } from '../redux/feedback/reducer';

const StyledForm = styled.div`
  margin-top: 50px;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .notesWrapper {
    margin-top: 30px;
    padding: 0 20px;
  }

  .note {
    max-width: 100%;
    margin-top: 20px;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .text {
    max-width: 100%;
  }

  .date {
    margin-top: 5px;
    color: yellowgreen;
    font-size: 12px;
  }

  .button {
    margin-top: 20px;
  }
`
const NotesForm = () => {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();
  const { notes } = useSelector(store => store.feedback);

  const createQuestion = (e) => {
    e.preventDefault();
    if (!note) return;
    const updatedNotes = [...notes, { text: note, date: new Date().toDateString(), id: Date.now() }];
    dispatch(setNotes(updatedNotes))
    setNote('');
  };

  const deleteQuestion = (id) => {
    const filteredNotes = notes.filter(item => item.id !== id);
    dispatch(setNotes(filteredNotes))
  };

  return (
    <StyledForm>
      <div className="wrapper">
        <Input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write a notes"
        />
        <Button marginLeft="20" text="Create note" onClick={createQuestion} />
      </div>
      <div className="notesWrapper">
        {notes.map(item => (
          <div key={item.id} className="note">
            <div>
              <p className="text">{item.text}</p>
              <p className="date">{item.date}</p>
            </div>
            <Button text="Delete" onClick={() => deleteQuestion(item.id)} />
          </div>
        ))}
      </div>
    </StyledForm>
  )
};

export default NotesForm;