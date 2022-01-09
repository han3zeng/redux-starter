import { combineReducers } from 'redux';

import postsReducer, { name } from '../features/posts/postsSlice';

const rootReducer = combineReducers({
  [name]: postsReducer,
});

export default rootReducer;
