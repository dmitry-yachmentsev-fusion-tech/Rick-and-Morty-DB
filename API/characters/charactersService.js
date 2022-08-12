import axios from 'axios';

export const getFilteredCharacters = async(currentPage) => {
  try {
    const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
    return {
      links: {
        prev: res.data.info.prev,
        next: res.data.info.next,
      },
      characters: res.data.results,
    }
  } catch (err) {
    console.error(error);
  }
};