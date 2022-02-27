import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import usersReducer from './slices/usersSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    users: usersReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
