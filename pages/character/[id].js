import { useRouter } from 'next/router';
import Episodes from '../../components/Episodes';
import axios from 'axios';

export default function ({ character, episodes }) {
  const { query } = useRouter();
  return (
    <div>
      <img src={`${character.image}`} />
      
      <h1>Character {character.name} info with id {query.id}</h1>
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