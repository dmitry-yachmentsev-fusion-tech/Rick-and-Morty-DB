import React from 'react';
import Link from 'next/link';

import classes from '../styles/components/episodes.module.css';

const Episodes = ({ episodes }) => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Episodes</h1>
      <div className={classes.content}>
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