import Link from 'next/link';

const HomePage = () => {
  const mokCharacters = [
    { id: 1, name: "Rick" },
    { id: 2, name: "Morty" }
  ];

  return (
    <div>
      <h1>Rick & Morty DataBase</h1>
      <div>
        <ul>
          {mokCharacters.map(hero => {
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