import classes from '../styles/pagination.module.css';
import CustomButton from '../UI/buttons/CustomButton';

const Pagination = ({ 
  links,
  onPrev, 
  onNext, 
  disabled,
  customClass
}) => {
  return (
    <div className={`${classes.wrapper} ${customClass}`}>
      {links?.prev && (
        <CustomButton 
          text="Prev" 
          onClick={onPrev} 
          isDisabled={disabled}
        />
      )}
      {links?.next && (
        <CustomButton 
          text="Next" 
          onClick={onNext} 
          isDisabled={disabled}
        />
      )}
    </div>
  )
};

export default Pagination;