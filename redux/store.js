import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { feedbackReducer } from './feedback/reducer';

const makeStore = () => {
  return configureStore({
    reducer: {
      [feedbackReducer.name]: feedbackReducer.reducer,
    },
    devTools: true,
  })
};

export const wrapper = createWrapper(makeStore);