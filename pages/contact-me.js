import MainWrapper from '../components/MainWrapper';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackForMobile from '../components/FeedbackForMobile';

const ContactMePage = ({ isMobile }) => {
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

export const getServerSideProps = ({ req }) => {
  const isMobile = /iOS|Librem|Mobian|Kai|Android|iPhone|BlackBerry|BB|IEMobile|Windows Phone/.test(req.headers['user-agent']);
  return {
    props: {
      isMobile,
    },
  };
};