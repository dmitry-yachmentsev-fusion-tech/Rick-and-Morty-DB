import styled from 'styled-components';

const StyledButton = styled.button`
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  border: 1px solid yellowgreen;
  border-radius: 4px;
  padding: 10px 20px;
  color: orange;
  &:hover {
    background-color: yellowgreen;
    color: #fff;
    transition: .2s;
  }
}
`
const Button = ({ text, onClick, isDisabled, ...props }) => {
  return (
    <StyledButton
      marginLeft={props.marginLeft}
      marginTop={props.marginTop}
      type="submit" 
      onClick={onClick} 
      disabled={isDisabled}
    >
      {text}
    </StyledButton>

  )
};

export default Button;