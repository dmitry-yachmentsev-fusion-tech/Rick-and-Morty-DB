import axios from 'axios';

import { baseTodoApi } from '../../constants/baseUrls';

export const createTodoToDB = async(data) => {
  try {
    const result = await axios.post(baseTodoApi, data);
    return result;
  } catch(err) {
    console.log(err);
  }
}