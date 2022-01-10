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
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const targetPost = state.find((post) => post.id === id);
      if (targetPost) {
        targetPost.title = title;
        targetPost.content = content;
      }
    },
  },
});

export default postsSlice.reducer;

export const selectPost = ({
  postId,
}) => (state) => state.posts.find((post) => post.id === postId);

export const selectPosts = (state) => state.posts;

export const { name } = postsSlice;

export const { postAdded, postUpdated } = postsSlice.actions;
