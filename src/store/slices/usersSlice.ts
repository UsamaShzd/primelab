import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import User from '../../interfaces/User';
const initialState: {
  list: User[];
} = {
  list: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.list = action.payload;
    },
  },
});

export const {setUsers} = usersSlice.actions;

export default usersSlice.reducer;
