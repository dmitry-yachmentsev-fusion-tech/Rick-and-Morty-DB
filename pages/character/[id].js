import { useRouter } from 'next/router';
import axios from 'axios';

import Episodes from '../../components/Episodes';
import classes from '../../styles/components/character.module.css'

export default function ({ character, episodes }) {
  const router = useRouter();
  const formattedCharacter = Object.entries(character);
  const defaultParameters = ['status', 'gender', 'location', 'episode',];

  return (
    <div className={classes.wrapper}>
      <div className={classes.characterWrapper}>
        <div className={classes.infoWrapper}>
          <h1 className={classes.title}>{character.name}</h1>
          <ul>
            {formattedCharacter.map(([param, value], index) => {
              const parameter = defaultParameters.includes(param);
              if(parameter) {
                let formattedValue = value;

                if(param === 'location') {
                  formattedValue = value?.name;
                } else if(param === 'episode') {
                  formattedValue = value.length;
                  param = 'episodes quantity';
                }

                return (
                  <li key={index} className={classes.parameterRow}>
                    <p className={classes.parameterText}>{param}:</p>
                    <p className={classes.parameterValue}>{formattedValue}</p>
                  </li>
                )
              }
            })}
          </ul>
        </div>
        <div className={classes.imageWrapper}>
          <img className={classes.image} src={`${character.image}`} />
        </div>
      </div>
      <Episodes episodes={episodes} />
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const character = await axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)
  const episodes = await axios.get('https://rickandmortyapi.com/api/episode');
  return {
    props: {
      character: character.data,
      episodes: episodes?.data?.results,
    }
  }
}