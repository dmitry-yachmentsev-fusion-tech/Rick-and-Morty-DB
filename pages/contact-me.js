import { useState } from 'react';
import styled from 'styled-components';

import MainWrapper from '../components/MainWrapper';
import Input from '../components/Input';
import Rating from '../components/Rating';
import NotesForm from '../components/NotesForm';

const ContactForm = styled.div`
  background-color: #fff;
  margin-top: 50px;
  padding: 20px;

  p {
    color: black;
  }


  .form {
    margin-top: 20px;
  }

  .inputsWrapper {
    margin-top: 20px;
  }

  .ratingWrapper {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }

  .ratingTitle {
    margin-right: 10px;
  }
`

const ContactMePage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <MainWrapper>
      <ContactForm>
        <div>
          <h1>Contact me</h1>
          <div className="inputsWrapper">
            <Input
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
              placeholder="Firstname"
            />
            <Input 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              placeholder="Lastname"
            />
          </div>
        </div>
        <div className="ratingWrapper">
          <p className="ratingTitle">Оцените нас:</p>
          <Rating />
        </div>
        <NotesForm />
      </ContactForm>
    </MainWrapper>
  )
};

export default ContactMePage;