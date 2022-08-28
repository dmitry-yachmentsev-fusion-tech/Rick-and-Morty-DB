import axios from 'axios';
import styled from 'styled-components';

import MainWrapper from '../../../components/MainWrapper';

const StyledEpisode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .titleWrapper {
    position: relative;
    display: inline-block;
  }

  .index {
    position: absolute;
    color: greenyellow;
    right: 0;
    bottom: -15px;
  }

  .content {
    margin-top: 30px;
  }

  .parameterWrapper {
    display: flex;
    align-items: center;
  }

  .parameterName {
    color: greenyellow;
  }

  .parameterValue {
    margin-left: 5px;
    color: #fff;
  }
`

export default function({ episode }) {
  return (
    <MainWrapper pageTitle="Episode page">
      <StyledEpisode>
        <div className="titleWrapper">
          <h1>Episode "{episode.name}"</h1>
          <p className="index">{episode.episode}</p>
        </div>
        <div className="content">
          <div className="parameterWrapper">
            <p className="parameterName">Air date:</p>
            <p className="parameterValue">{episode.air_date}</p>
          </div>
          <div className="parameterWrapper">
            <p className="parameterName">Characters of the episode:</p>
            <p className="parameterValue">{episode.characters.length}</p>
          </div>
        </div>
      </StyledEpisode>
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