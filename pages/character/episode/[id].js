import axios from 'axios';

export default function({ episode }) {

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