import Link from 'next/link'
import styled from 'styled-components';

const StyledRow = styled.li`
  margin-top: ${(props) => props.isFirst ? '0' : '10px'};
  border: 3px solid yellowgreen;
  border-radius: 4px;

  .itemLink {
    padding: 10px;
    display: block;
    text-decoration: none;
    color: greenyellow;
  }
`

const Row = ({ item, route, isFirst }) => {
  return (
    <StyledRow isFirst={isFirst}>
      <Link href={route}>
        <a className="itemLink">{item.name}</a>
      </Link>
    </StyledRow>
  )
};

export default Row;