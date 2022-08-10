import React from 'react';
import Link from 'next/link';

const Episodes = ({ episodes }) => {
  return (
    <div style={{border: '2px solid greenyellow'}}>
      <h1>Episodes</h1>
      <div style={{display: 'flex', backgroundColor: 'yellow'}}>
        <ul>
          {!!episodes.length && episodes.map(item => {
            return (
              <li key={item.id}>
                <Link href={`episode/${item.id}`}>
                  <a>{item.name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Episodes;