import Link from 'next/link'

import classes from '../styles/row.module.css';

const Row = ({ item, route }) => {
  return (
    <li className={classes.wrapper}>
      <Link href={route}>
        <a className={classes.link}>{item.name}</a>
      </Link>
    </li>
  )
};

export default Row;