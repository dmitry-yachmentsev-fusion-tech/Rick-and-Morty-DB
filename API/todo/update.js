import axios from 'axios';

import { baseTodoApi } from '../../constants/baseUrls';

export const updateTodoInDB = async(data) => {
  try {
    const result = await axios.patch(baseTodoApi, data);
    return result;
  } catch(err) {
    console.log(err);
  }
}