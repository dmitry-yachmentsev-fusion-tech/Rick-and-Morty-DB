import axios from 'axios';
import Link from 'next/link';

const Pagination = ({ prevLink, nextLink, onPrev, onNext, currentPage }) => {

  console.log(currentPage);
  return (
    <div style={{padding: '20px', border: '3px solid purple', display: 'flex'}}>
      {/* {prevLink && <button onClickhref={`/?page=${currentPage}`}>Prev</button>} */}
      {nextLink && <button onClick={onNext}>Next</button>}
    </div>
  )
};

export default Pagination;