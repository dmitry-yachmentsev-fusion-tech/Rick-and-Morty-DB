import classes from '../../styles/UI.module.css';

const CustomButton = ({ text, onClick, isDisabled, extraClass }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={isDisabled}
      className={`${classes.pagiBtn} ${extraClass}`}
    >
      {text}
    </button>
  )
};

export default CustomButton;