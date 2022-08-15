import Link from 'next/link'

import classes from '../styles/characterRow.module.css';

const CharacterRow = ({ hero }) => {
  console.log(hero);
  return (
    <li className={classes.wrapper}>
      <Link href={`character/${hero.id}`}>
        <a className={classes.link}>{hero.name}</a>
      </Link>
    </li>
  )
};

export default CharacterRow;