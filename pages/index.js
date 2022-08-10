import Link from 'next/link';
import axios from 'axios';

const HomePage = ({ characters }) => {
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
      </div>
    </div>
  )
};

export default HomePage;

export async function getServerSideProps(context) {
  const response = await axios.get('https://rickandmortyapi.com/api/character');
  
  return {
    props: { characters: response?.data?.results },
  }
}