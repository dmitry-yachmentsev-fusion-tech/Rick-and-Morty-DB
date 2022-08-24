import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
  rating: null,
  notes: [
    {
      id: null,
      note: '',
      date: '',
    },
  ]
};

export const feedbackReducer = createSlice({
  name: 'feedback',
  initialState: initialValues,
  reducers: {
    setRating: (state, action) => {
      state.rating = action.payload;
    },
  }
});

export default feedbackReducer.reducer;

export const { setRating } = feedbackReducer.actions;