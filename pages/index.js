import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Pagination from '../components/Pagination';

const HomePage = ({ initialCharacters, prevCharactersLink, nextCharactersLink }) => {
  const [characters, setCharacters] = useState(initialCharacters)
  const [currentPage, setCurrentPage] = useState(0);
  console.log('``````````````~~~~~~~~~~~~~~RENDER INDEX');
  const handleNextCharactersPage = () => {

  }
  const onPrev = async () => {
    try {
      const res = await axios.get(prevCharactersLink);
      setCurrentPage(currentPage - 1);
      setCharacters(res?.data?.results);
    } catch (err) {
      console.error('next characters error: ', err)
    }
    
  };

  const onNext = async () => {
    try {
      const res = await axios.get(nextCharactersLink);
      setCurrentPage(currentPage + 1);
      console.log(res);
      setCharacters(res?.data?.results)
    } catch(err) {
      console.error('next characters error: ', err)
    }
  };
  return (
    <div>
      <h1>Rick & Morty DataBase</h1>
      <div>
        <ul>
          {characters.map(hero => {
            return (
              <li key={hero.id}>
                <Link href={`character/${hero.id}`}>
                  <a>{hero.name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
        <Pagination 
          prevLink={prevCharactersLink} 
          nextLink={nextCharactersLink} 
          onPrev={onPrev}
          onNext={onNext}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
};

export default HomePage;

export async function getServerSideProps(context) {
  console.log(context);
  const response = await axios.get('https://rickandmortyapi.com/api/character');
  console.log(response);
  return {
    props: { 
      initialCharacters: response?.data?.results,
      prevCharactersLink: response?.data?.info?.prev,
      nextCharactersLink: response?.data?.info?.next,
    },
  }
}