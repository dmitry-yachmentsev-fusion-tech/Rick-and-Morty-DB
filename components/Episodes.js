import React from 'react';
import styled from 'styled-components';

import Row from '../components/Row'

const StyledEpisodes = styled.div`
  .listWrapper {
    margin-top: 20px;
  }
`

const Episodes = ({ episodes }) => {
  return (
    <StyledEpisodes>
      <h1>Episodes</h1>
      <div className="listWrapper">
        <ul>
          {!!episodes.length && episodes.map((item, index) => {
            return (
              <Row 
                key={item.id} 
                item={item} 
                route={`episode/${item.id}`} 
                isFirst={index === 0}
              />
            )
          })}
        </ul>
      </div>
    </StyledEpisodes>
  )
}

export default Episodes;