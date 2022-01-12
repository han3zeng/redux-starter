import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  {
    id: '1',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    title: 'First Posts',
    content: 'Hello!',
    userId: '0',
    reactions: {
      thumbsUp: 1,
      rocket: 1,
    },
  },
  {
    id: '2',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    title: 'Second Post',
    content: 'More text',
    userId: '1',
    reactions: {
      eyes: 1,
    },
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
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction] = existingPost.reactions[reaction] + 1 || 1;
      }
    },
  },
});

export default postsSlice.reducer;

export const selectPost = ({ postId }) => (state) => state.posts.find((post) => post.id === postId);

export const selectPosts = (state) => state.posts;

export const { name } = postsSlice;

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;
