import Link from 'next/link'

import classes from '../styles/character.module.css';

const Character = ({ hero }) => {
  return (
    <li className={classes.wrapper}>
      <Link href={`character/${hero.id}`}>
        <a className={classes.link}>{hero.name}</a>
      </Link>
    </li>
  )
};

export default Character;