import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import User from '../../interfaces/User';
const initialState: {
  loading: boolean;
  list: User[];
} = {
  loading: false,
  list: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setLoadng: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.list = action.payload;
    },
  },
});

export const {setUsers, setLoadng} = usersSlice.actions;

export default usersSlice.reducer;
