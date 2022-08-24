import { useState } from 'react';
import styled from 'styled-components';

import Input from './Input';
import Button from './Button';

const StyledForm = styled.div`
  margin-top: 50px;

  .form {
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
  const [questions, setQuestions] = useState([]);

  const createQuestion = (e) => {
    e.preventDefault();
    if (!note) return;
    setQuestions([...questions, { note, date: new Date().toDateString(), id: Date.now() }])
    setNote('');
  };

  const deleteQuestion = (id) => {
    const filteredQuestions = questions.filter(item => item.id !== id);
    setQuestions(filteredQuestions);
  };

  return (
    <StyledForm>
      <form className="form" onSubmit={createQuestion}>
          <Input 
            value={note} 
            onChange={(e) => setNote(e.target.value)} 
            placeholder="Write a notes" 
          />
          <Button marginLeft="20" text="Create note" onClick={createQuestion} />
        </form>
      <div className="notesWrapper">
        {questions.map(item => (
          <div key={item.id} className="note">
            <div>
              <p className="text">{item.note}</p>
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