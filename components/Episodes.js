import React from 'react';
import Link from 'next/link';

const Episodes = () => {
  const mokEpisodes = [
    { id: 1, name: 'first episode'},
    { id: 2, name: 'second episode'}
  ]

  return (
    <div style={{border: '2px solid greenyellow'}}>
      <h1>Episodes</h1>
      <div style={{display: 'flex', backgroundColor: 'yellow'}}>
        {mokEpisodes.map(item => {
          return (
            <Link href={`episode/${item.id}`}>
              <a>{item.name}</a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Episodes;