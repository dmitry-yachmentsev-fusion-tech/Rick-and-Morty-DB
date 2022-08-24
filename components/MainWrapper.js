import NavItem from './NavItem';
import styled from 'styled-components';

const MainContainer = styled.div`
  min-height: 100vh;

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

const MainWrapper = ({ children }) => {
  return (
    <MainContainer>
      <nav className="nav">
          <ul className="listContainer">
            <NavItem link="/" text="Home" />
            <NavItem link="/contact-me" text="Contact me" />
          </ul>
      </nav>
      {children}
    </MainContainer>
  )
};

export default MainWrapper;