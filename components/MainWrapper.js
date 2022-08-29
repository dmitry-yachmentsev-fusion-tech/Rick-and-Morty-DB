import Head from 'next/head';
import styled from 'styled-components';

import NavItem from './NavItem';

const MainContainer = styled.div`
  height: calc(100vh - 64px);

  .nav {
    padding: 20px 10px;
    border: 2px solid teal;
    border-radius: 0 0 4px 4px;
    border-top: none;
    margin-bottom: 20px;
  }

  .listContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const MainWrapper = ({ children, pageTitle }) => {
  return (
    <>
      {!!pageTitle && (
        <Head>
          <title>{pageTitle}</title>
        </Head>
      )}
      <MainContainer>
        <nav className="nav">
            <ul className="listContainer">
              <NavItem link="/" text="Home" />
              <NavItem link="/contact-me" text="Contact me" />
            </ul>
        </nav>
        {children}
      </MainContainer>
    </>
  )
};

export default MainWrapper;