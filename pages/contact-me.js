import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import MainWrapper from '../components/MainWrapper';
import Input from '../components/Input';
import Rating from '../components/Rating';
import NotesForm from '../components/NotesForm';
import CustomButton from '../components/Button';
import { setRating, setNotes } from '../redux/feedback/reducer';

const ContactForm = styled.form`
  background-color: #fff;
  height: 100vh;
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

  .input {
    width: 100%;
    padding: 15px 10px;
    border: 1px solid orange;
    outline: none;
  }

  .input + .input {
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

  .errorWrapper {
    margin-top: 5px;
  }

  .error {
    color: red;
  }
`

const ContactMePage = () => {
  const dispatch = useDispatch();
  const { rating, notes } = useSelector(store => store.feedback)
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const submitFeedback = data => {
    const requestPayload = {
      firstname: data.firstName,
      lastname: data.lastName,
      rating,
      notes,
    };
    console.log('requestPayload', requestPayload);
    dispatch(setRating(null));
    dispatch(setNotes([]));
    reset();
  };

  return (
    <MainWrapper>
      <ContactForm onSubmit={handleSubmit(submitFeedback)}>
        <div>
          <h1>Contact me</h1>
          <div className="inputsWrapper">
            <Input
              {...register('firstName', {
                required: 'firstname is required', 
                minLength: {
                  value: 2, 
                  message: 'Minimum is 2 symbols',
                }
              })}
              errors={errors}
            />
            <Input
              {...register("lastName", {
                required: 'lastname is required', 
                minLength: {
                  value: 2,
                  message: 'Minimum is 2 symbols',
                }
              })}
              errors={errors}
            />
          </div>
        </div>
        <div className="ratingWrapper">
          <p className="ratingTitle">Оцените нас:</p>
          <Rating />
        </div>
        <NotesForm />
        <CustomButton text="Submit" marginTop="40" />
      </ContactForm>
    </MainWrapper>
  )
};

export default ContactMePage;