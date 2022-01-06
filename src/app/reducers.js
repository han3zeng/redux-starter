import { combineReducers } from 'redux';

import postsReducer, { name } from '../features/posts/postSlice';

const rootReducer = combineReducers({
  [name]: postsReducer,
});

export default rootReducer;
