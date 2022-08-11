import axios from 'axios';
import { useRouter } from 'next/router';

export default function({ episode }) {
  const router = useRouter();
  console.log('episode', router);
  return (
    <div>
      <h1>Episode {episode.name}</h1>
    </div>
  )
};

export async function getServerSideProps({ params }) {
  const episode = await axios.get(`https://rickandmortyapi.com/api/episode/${params.id}`);

  return {
    props: {
      episode: episode.data,
    }
  }
}