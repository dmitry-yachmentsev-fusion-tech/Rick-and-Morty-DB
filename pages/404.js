import Link from 'next/link';
import styled from 'styled-components';

import MainWrapper from '../components/MainWrapper';

const StyledError = styled.div`
  height: calc(100% - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .link {
    margin-top: 20px;
    color: greenyellow;
  }
`

const ErrorPage = () => {
  return (
    <MainWrapper pageTitle="Error page">
      <StyledError>
        <h1>{"Sorry, page is not found :("}</h1>
        <Link href="/"><a className="link">Return Home</a></Link>
      </StyledError>
    </MainWrapper>
  )
};

export default ErrorPage;
