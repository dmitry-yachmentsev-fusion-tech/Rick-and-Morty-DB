import classes from '../styles/pagination.module.css';

const Pagination = ({ 
  links,
  onPrev, 
  onNext, 
  disabled,
}) => {
  return (
    <div className={classes.wrapper}>
      {links?.prev && <button onClick={onPrev} disabled={disabled}>Prev</button>}
      {links?.next && <button onClick={onNext} disabled={disabled}>Next</button>}
    </div>
  )
};

export default Pagination;