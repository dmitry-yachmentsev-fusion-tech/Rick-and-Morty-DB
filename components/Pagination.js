import Link from 'next/link';
import styled from 'styled-components';

const StyledPagination = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: flex-start;
  align-items: center;

  .infoText {
    width: 150px;
    color: orange;
    font-size: 20px;
  }

  .buttonsWrapper {
    display: flex;
    justify-content: flex-end;
    margin-left: 20px;
    width: 150px;
  }

  .pagiLink {
    border: 1px solid yellowgreen;
    border-radius: 4px;
    padding: 5px 20px 5px 20px;
    color: orange;
  }
  
  .pagiLink:hover {
    background-color: yellowgreen;
    color: #fff;
    transition: .2s;
  }
  
  .pagiLink + .pagiLink {
    margin-left: 10px;
  }
`
const Pagination = ({ links, currentPage, pages }) => {
  return (
    <StyledPagination>
      <p className="infoText">page {currentPage || 1} {!!pages && `of ${pages}`}</p>
      <div className="buttonsWrapper">
        {links?.prev && (
          <Link href={`/?page=${currentPage - 1}`} shallow={true}>
            <a className="pagiLink">Prev</a>
          </Link>
        )}
        {links?.next && (
          <Link href={`/?page=${currentPage + 1}`} shallow={true}>
            <a className="pagiLink">Next</a>
          </Link>
        )}
      </div>
    </StyledPagination>
  )
};

export default Pagination;