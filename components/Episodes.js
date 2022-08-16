import React from 'react';
import Link from 'next/link';

import Row from '../components/Row'
import classes from '../styles/components/episodes.module.css';

const Episodes = ({ episodes }) => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Episodes</h1>
      <div className={classes.content}>
        <ul>
          {!!episodes.length && episodes.map(item => {
            console.log(item);
            return <Row key={item.id} item={item} route={`episode/${item.id}`} />;
          })}
        </ul>
      </div>
    </div>
  )
}

export default Episodes;