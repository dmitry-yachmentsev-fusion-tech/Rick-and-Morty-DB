import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import MainWrapper from '../components/MainWrapper';
import { wrapper } from '../redux/store';
import Pagination from '../components/Pagination';
import Row from '../components/Row';
import { getFilteredCharacters } from '../API/characters/charactersService'

const HomePage = ({ charactersInfo, prevPage, nextPage, pages }) => {
  const router = useRouter();
  const [characters, setCharacters] = useState(charactersInfo?.results);
  const [pagiLinks, setPagiLinks] = useState({
    prev: prevPage,
    next: nextPage,
  })

  useEffect(() => {
    pagiAction();
  }, [router.query.page])
  
  const pagiAction = async() => {
    const { links, characters } =  await getFilteredCharacters(router.query.page);
    setPagiLinks(links);
    setCharacters(characters);
  }

  return (
    <MainWrapper>
      <div>
        <h1>Rick & Morty DataBase</h1>
        <Pagination
            links={pagiLinks} 
            currentPage={+router.query.page || 1}
            pages={pages}
          />
        <ul>
          {characters && characters.map((hero, index) => {
            return <Row
              key={hero.id} 
              item={hero} 
              route={`character/${hero.id}`}
              isFirst={index === 0}
            />;
          })}
        </ul>
      </div>
    </MainWrapper>
  )
};

export default HomePage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => 
  async function getServerSideProps({ query }) {
    const page = query?.page || 1;
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
    return {
      props: { 
        charactersInfo: response?.data,
        prevPage: response.data.info?.prev,
        nextPage: response.data.info?.next,
        pages: response.data.info.pages,
      },
    }
  }
)