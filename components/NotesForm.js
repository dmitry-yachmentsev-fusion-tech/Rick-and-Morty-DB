import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Input from './Input';
import Button from './Button';
import Note from './Note';
import { setNotes } from '../redux/feedback/reducer';
import { createTodoToDB } from '../API/todo/create';

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

  .button {
    margin-top: 20px;
  }
`
const NotesForm = () => {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();
  const { notes } = useSelector(store => store.feedback);

  const createNote = async() => {
    try {
      if (!note) return;
      const newNote = { text: note, date: new Date().toDateString(), id: Date.now() };
      await createTodoToDB(newNote);
      const updatedNotes = [...notes, newNote];
      dispatch(setNotes(updatedNotes))
      setNote('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledForm>
      <div className="wrapper">
        <Input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write a notes"
        />
        <Button marginLeft="20" text="Create note" onClick={createNote} />
      </div>
      <div className="notesWrapper">
        {notes.map(item => (
          <Note key={item.id} item={item} />
        ))}
      </div>
    </StyledForm>
  )
};

export default NotesForm;
