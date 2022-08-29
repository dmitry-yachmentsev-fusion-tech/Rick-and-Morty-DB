import styled from 'styled-components';

const WrapperForMobile = styled.div`
  height: calc(100% - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const FeedbackForMobile = () => {
  return (
    <WrapperForMobile>
      <h1>Available for desktop users only</h1>
    </WrapperForMobile>
  )
};

export default FeedbackForMobile;