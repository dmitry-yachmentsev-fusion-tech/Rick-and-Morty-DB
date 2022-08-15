import { useEffect, useState } from 'react';
import axios from 'axios';

import Pagination from '../components/Pagination';
import classes from '../styles/home.module.css';
import CharacterRow from '../components/CharacterRow';
import { getFilteredCharacters } from '../API/characters/charactersService'

const HomePage = ({ charactersInfo, prevPage, nextPage, pages }) => {
  const [characters, setCharacters] = useState(charactersInfo?.results);
  const [pagiLinks, setPagiLinks] = useState({
    prev: prevPage,
    next: nextPage,
  })
  const [currentPage, setCurrentPage] = useState(null);
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);

  useEffect(() => {
    pagiAction();
  }, [currentPage]);

  const pagiAction = async() => {
    if(currentPage) {
      const { links, characters } =  await getFilteredCharacters(currentPage);
      setPagiLinks(links);
      setCharacters(characters);
      setIsDisabledBtn(false);
    } else {
      setIsDisabledBtn(false);
    }
  }

  const onPrev = async () => {
    setIsDisabledBtn(true);
    setCurrentPage(currentPage - 1);
  };

  const onNext = async () => {
    setIsDisabledBtn(true);
    (!currentPage) ? setCurrentPage(2) : setCurrentPage(currentPage + 1);
  };

  return (
    <div>
        <h1>Rick & Morty DataBase</h1>
      <div className={classes.wrapper}>
        <div className={classes.pagiWrapper}>
          <h2>page {currentPage || 1} {!!pages && `of ${pages}`}</h2>
          <Pagination
            links={pagiLinks} 
            onPrev={onPrev}
            onNext={onNext}
            currentPage={currentPage}
            disabled={isDisabledBtn}
            customClass={classes.pagi}
          />
        </div>
        <ul>
          {characters && characters.map(hero => {
            return <CharacterRow key={hero.id} hero={hero} />;
          })}
        </ul>
      </div>
    </div>
  )
};

export default HomePage;

export async function getServerSideProps() {
  const response = await axios.get('https://rickandmortyapi.com/api/character/?page=1');
  return {
    props: { 
      charactersInfo: response?.data,
      prevPage: response.data.info?.prev,
      nextPage: response.data.info?.next,
      pages: response.data.info.pages,
    },
  }
}