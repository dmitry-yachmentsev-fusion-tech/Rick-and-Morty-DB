import axios from 'axios';

import MainWrapper from '../../../components/MainWrapper';

export default function({ episode }) {
  return (
    <MainWrapper>
      <div>
        <h1>Episode {episode.name}</h1>
      </div>
    </MainWrapper>
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