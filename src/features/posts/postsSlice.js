import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First Posts', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
];

// immer under hood
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export default postsSlice.reducer;

export const selectPosts = (state) => state.posts;

export const { name } = postsSlice;

export const { postAdded } = postsSlice.actions;
