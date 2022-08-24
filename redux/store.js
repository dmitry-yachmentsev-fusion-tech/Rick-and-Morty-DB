import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { characterReducer } from './testFeature/reducer';
import { feedbackReducer } from './feedback/reducer';
console.log(feedbackReducer);
const makeStore = () => {
  return configureStore({
    reducer: {
      [characterReducer.name]: characterReducer.reducer,
      [feedbackReducer.name]: feedbackReducer.reducer,
    },
    devTools: true,
  })
};

export const wrapper = createWrapper(makeStore);