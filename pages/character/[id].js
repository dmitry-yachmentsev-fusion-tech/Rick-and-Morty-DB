import { useRouter } from 'next/router';
import axios from 'axios';
import styled from 'styled-components';

import MainWrapper from '../../components/MainWrapper';
import Episodes from '../../components/Episodes';

//  min-height: 100vh;

const StyledCharacter = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;

  .infoWrapper {
    border-bottom: 2px solid rgb(14, 120, 132);
  }

  .title {
    color: orange;
    text-align: center;
  }

  .parameterRow {
    display: flex;
    align-items: center;
    margin-top: 25px;
    padding-top: 5px;
  }
  
  .parameterRow + .parameterRow {
    border-top: 1px solid greenyellow;
  }
  
  .parameterText {
    color: greenyellow;
  }
  
  .parameterValue {
    margin-left: 5px;
    color: #fff;
  }
  
  .imageWrapper {
    margin-left: 20px;
    max-height: 300px;
  }
  
  .image {
    object-fit: contain;
    display: block;
    width: 100%;
    height: 100%;
  }
`

export default function ({ character, episodes }) {
  const router = useRouter();
  const formattedCharacter = Object.entries(character);
  const defaultParameters = ['status', 'gender', 'location', 'episode',];

  return (
    <MainWrapper>
      {/* <div className={classes.wrapper}> */}
        <StyledCharacter>
          <div className="infoWrapper">
            <h1 className="title">{character.name}</h1>
            <ul>
              {formattedCharacter.map(([param, value], index) => {
                const parameter = defaultParameters.includes(param);
                if (parameter) {
                  let formattedValue = value;

                  if (param === 'location') {
                    formattedValue = value?.name;
                  } else if (param === 'episode') {
                    formattedValue = value.length;
                    param = 'episodes quantity';
                  }

                  return (
                    <li key={index} className="parameterRow">
                      <p className="parameterText">{param}:</p>
                      <p className="parameterValue">{formattedValue}</p>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
          <div className="imageWrapper">
            <img className="image" src={`${character.image}`} />
          </div>
        </StyledCharacter>
        {/* <div className={classes.characterWrapper}> */}
          
        {/* </div> */}
        <Episodes episodes={episodes} />
      {/* </div> */}
    </MainWrapper>
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