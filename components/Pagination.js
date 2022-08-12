import classes from '../styles/pagination.module.css';

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
      <button 
        onClick={onPrev}
        disabled={disabled}
        className={classes.pagiBtn}
      >
        Prev
      </button>
      )}
      {links?.next && (
        <button 
          onClick={onNext} 
          disabled={disabled}
          className={classes.pagiBtn}
        >
          Next
        </button>
      )}
    </div>
  )
};

export default Pagination;