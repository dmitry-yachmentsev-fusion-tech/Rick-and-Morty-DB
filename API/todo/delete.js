import axios from 'axios';

import { baseTodoApi } from '../../constants/baseUrls';

export const deleteTodoFromDB = async(id) => {
  try {
    const result = await axios.delete(baseTodoApi, { data: { id } });
    return result;
  } catch(err) {
    console.log(err);
  }
}

export const deleteAllTodosFromDB = async() => {
  try {
    const result = await axios.delete(baseTodoApi);
    return result;
  } catch(err) {
    console.log(err);
  }
}