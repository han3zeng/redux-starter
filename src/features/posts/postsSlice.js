import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    date: new Date().toISOString(),
    title: 'First Posts',
    content: 'Hello!',
    userId: '0',
  },
  {
    id: '2',
    date: new Date().toISOString(),
    title: 'Second Post',
    content: 'More text',
    userId: '1',
  },
];

// immer under hood
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ title, content, userId }) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            userId,
          },
        };
      },
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

export const selectPost = ({ postId }) => (state) => state.posts.find((post) => post.id === postId);

export const selectPosts = (state) => state.posts;

export const { name } = postsSlice;

export const { postAdded, postUpdated } = postsSlice.actions;
