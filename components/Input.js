import styled from 'styled-components';

const StyledInput = styled.div`
width: 100%;

  & + & {
    margin-top: 20px;
  }

  .input {
    width: 100%;
    padding: 15px 10px;
    border: 1px solid orange;
    outline: none;
  }
`;

const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <StyledInput>
      <input
        className="input"
        type={type || 'text'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </StyledInput>
  )
}

export default Input;