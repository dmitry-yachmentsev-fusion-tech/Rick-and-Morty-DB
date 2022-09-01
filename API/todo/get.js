import axios from 'axios';

import { baseTodoApi } from '../../constants/baseUrls';

export const getTodoFromDB = async() => {
  try {
    const result = await axios.get('http://localhost:3000/api/todo')
    return result;
  } catch(err) {
    console.log(err);
  }
}