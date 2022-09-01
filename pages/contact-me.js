import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MainWrapper from '../components/MainWrapper';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackForMobile from '../components/FeedbackForMobile';
import { getTodoFromDB } from '../API/todo/get';
import { setNotes } from '../redux/feedback/reducer';

const ContactMePage = ({ isMobile, notesFromDB }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNotes(notesFromDB));
  }, []);

  return (
    <>
      <MainWrapper pageTitle="Contact-me page">
        {isMobile ? (
          <FeedbackForMobile />
        ) : (
          <FeedbackForm />
        )}
      </MainWrapper>
    </>
  )
};

export default ContactMePage;

export const getServerSideProps = async({ req }) => {
  const isMobile = /iOS|Librem|Mobian|Kai|Android|iPhone|BlackBerry|BB|IEMobile|Windows Phone/.test(req.headers['user-agent']);
  const notes = await getTodoFromDB();
  return {
    props: {
      isMobile,
      notesFromDB: notes.data.results,
    },
  };
};