import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import Input from '../components/Input';
import Button from '../components/Button';
import EditIcon from './icons/EditIcon';
import CheckIcon from './icons/CheckIcon';
import { deleteTodoFromDB } from '../API/todo/delete';
import { updateTodoInDB } from '../API/todo/update';
import { setNotes } from '../redux/feedback/reducer';

const StyledNote = styled.div`
  position: relative;
  max-width: 100%;
  height: 50px;
  margin-top: 20px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .text {
    max-width: 100%;
  }

  .date {
    position: absolute;
    bottom: -10px;
    left: 0;
    color: yellowgreen;
    font-size: 10px;
  }

  .button {
    margin-top: 20px;
  }

  .noteContent {
  }

  .editBtn {
  }

  .noteField {
  }
`

const Note = ({ item }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const { notes } = useSelector(store => store.feedback);
  const [title, setTitle] = useState(item.text);

  const editNote = async() => {
    try {
      setIsEdit(!isEdit);
      if (isEdit && title !==item.text) {
        const editedNote = { ...item, text: title };
        await updateTodoInDB(editedNote);
        const editedNotes = notes.map(note => {
          return note.id === item.id ? editedNote : note;
        })
        dispatch(setNotes(editedNotes));
      }
    } catch(err) {
      console.log(err);
    }
  };

  const deleteNote = async(id) => {
    const filteredNotes = notes.filter(item => item.id !== id);
    await deleteTodoFromDB(id);
    dispatch(setNotes(filteredNotes))
  };

  return (
    <StyledNote>
      <button
        onClick={editNote}
        type="button"
        className='editBtn'
      >
        {isEdit ? (
          <CheckIcon />
          ) : (
          <EditIcon />
        )}
      </button>
      <div className="noteField">
        {isEdit ? (
          <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        ) : (
          <div className="noteContent">
          <p className="text">{item.text}</p>
          <p className="date">{item.date}</p>
          </div>
        )}
      </div>
      <Button text="Delete" onClick={() => deleteNote(item.id)} />
    </StyledNote>
  )
};

export default Note;