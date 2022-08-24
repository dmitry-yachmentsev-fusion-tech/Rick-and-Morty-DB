import React from 'react';
import Link from 'next/link';

import Row from '../components/Row'

const Episodes = ({ episodes }) => {
  return (
    <div>
      <h1>Episodes</h1>
      <div>
        <ul>
          {!!episodes.length && episodes.map((item, index) => {
            console.log(item);
            return <Row 
              key={item.id} 
              item={item} 
              route={`episode/${item.id}`} 
              isFirst={index === 0}
            />;
          })}
        </ul>
      </div>
    </div>
  )
}

export default Episodes;