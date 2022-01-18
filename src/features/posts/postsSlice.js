import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
// import { sub } from 'date-fns';
import { client } from '../../api/client';
import { REQUEST_STATUS } from '../../constants';

const initialState = {
  posts: [],
  status: REQUEST_STATUS.idle,
  error: null,
};

// immer under hood
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
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
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction] = existingPost.reactions[reaction] + 1 || 1;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = REQUEST_STATUS.loading;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = REQUEST_STATUS.failed;
        state.error = action.error.message;
      });
  }
});

export default postsSlice.reducer;

export const selectPostById = ({ postId }) => (state) => state.posts.posts.find((post) => post.id === postId);

export const selectAllPosts = (state) => state.posts.posts;

export const { name } = postsSlice;

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts');
  return response.data;
});
