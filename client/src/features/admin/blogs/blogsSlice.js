import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const res = await axios.get('/api/admin/blogs', { withCredentials: true });
  return res.data;
});

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: { blogs: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
    });
  },
});

export default blogsSlice.reducer;
