import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const res = await axios.post('/api/auth/login', credentials, { withCredentials: true });
  return res.data.user;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await axios.post('/api/auth/logout', {}, { withCredentials: true });
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
