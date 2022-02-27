import {createSlice, PayloadAction} from '@reduxjs/toolkit';
const initialState = {
  mode: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
    },
  },
});

export const {changeMode} = themeSlice.actions;

export default themeSlice.reducer;
