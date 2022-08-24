import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
  characterName: '',
  characterStatus: '',
};

export const characterReducer = createSlice({
  name: 'characterInfo',
  initialState: initialValues,
  reducers: {
    setCharacterName: (state, action) => {
      state.characterName = action.payload;
    }
  }
});

export const { setCharacter } = characterReducer.actions;
export default characterReducer.reducer;
