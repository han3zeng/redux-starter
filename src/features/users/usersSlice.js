import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client';

const initialState = [];

const NAME = 'users';

const userSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => action.payload);
  },
});

export default userSlice.reducer;

export const { name } = userSlice;

export const selectUsers = (state) => state.users;

export const selectUser = (userId) => (state) => state.users.find(({ id }) => id === userId);

export const fetchUsers = createAsyncThunk(`${NAME}/fetchUsers`, async () => {
  const response = await client.get('/fakeApi/users');
  return response.data;
});
