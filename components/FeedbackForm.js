import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import Input from '../components/Input';
import Rating from '../components/Rating';
import NotesForm from '../components/NotesForm';
import CustomButton from '../components/Button';
import { setRating, setNotes } from '../redux/feedback/reducer';
import { deleteAllTodosFromDB } from '../API/todo/delete';

const StyledForm = styled.form`
  background-color: #fff;
  height: (100vh - 64px);
  margin-top: 50px;
  padding: 40px 60px;

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

  .errorWrapper {
    margin-top: 5px;
  }

  .error {
    color: red;
  }
`

const FeedbackForm = () => {
  const dispatch = useDispatch();
  const { rating, notes } = useSelector(store => store.feedback);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  
  const submitFeedback = async(data) => {
    try {
      await deleteAllTodosFromDB();
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
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitFeedback)}>
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
            placeholder="Firstname"
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
            placeholder="Lastname"
            errors={errors}
          />
        </div>
      </div>
      <div className="ratingWrapper">
        <p className="ratingTitle">Rate us</p>
        <Rating />
      </div>
      <NotesForm />
      <CustomButton 
        type="submit" 
        text="Submit" 
        marginTop="40"
      />
    </StyledForm>
  )
};

export default FeedbackForm;