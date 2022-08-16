import classes from '../styles/components/pagination.module.css';
import CustomButton from '../UI/buttons/CustomButton';

const Pagination = ({ 
  links,
  onPrev, 
  onNext, 
  disabled,
  customClass,
  currentPage,
  pages
}) => {
  return (
    <div className={`${classes.wrapper} ${customClass}`}>
      <p className={classes.infoText}>page {currentPage || 1} {!!pages && `of ${pages}`}</p>
      <div className={classes.buttonsWrapper}>
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
    </div>
  )
};

export default Pagination;