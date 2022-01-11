import { combineReducers } from 'redux';

import postsReducer, { name as postsName } from '../features/posts/postsSlice';
import usersReducer, { name as usersName } from '../features/users/usersSlice';

const rootReducer = combineReducers({
  [postsName]: postsReducer,
  [usersName]: usersReducer,
});

export default rootReducer;
