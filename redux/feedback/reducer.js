import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
  rating: null,
  notes: [
    {
      id: null,
      text: '',
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
    setNotes: (state, action) => {
      state.notes = action.payload;
    }
  }
});

export default feedbackReducer.reducer;

export const { setRating, setNotes } = feedbackReducer.actions;