import { forwardRef } from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
width: 100%;

  & + & {
    margin-top: 20px;
  }

  .input {
    width: 100%;
    padding: 10px;
    border: 1px solid orange;
    outline: none;
  }

  .errorWrapper {
   padding: 10px 0;
  }
`;

const Input = forwardRef(({ type, value, onChange, placeholder, errors, ...props }, ref) => {
  return (
    <StyledInput>
      <input
        className="input"
        type={type || 'text'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
      {errors?.[props.name] && (
        <div className='errorWrapper'>
          <p className='error'>{errors?.[props.name]?.message || 'Error'}</p>
        </div>
      )}
    </StyledInput>
  )
});

export default Input;