import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAccounts = createAsyncThunk('accounts/fetchAccounts', async () => {
  const res = await axios.get('/api/admin/accounts', { withCredentials: true });
  return res.data;
});

export const createAccount = createAsyncThunk('accounts/createAccount', async (account) => {
  const res = await axios.post('/api/admin/accounts', account, { withCredentials: true });
  return res.data;
});

export const updateAccount = createAsyncThunk('accounts/updateAccount', async ({ id, data }) => {
  const res = await axios.put(`/api/admin/accounts/${id}`, data, { withCredentials: true });
  return res.data;
});

export const deleteAccount = createAsyncThunk('accounts/deleteAccount', async (id) => {
  await axios.delete(`/api/admin/accounts/${id}`, { withCredentials: true });
  return id;
});

const accountsSlice = createSlice({
  name: 'accounts',
  initialState: { accounts: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccounts.fulfilled, (state, action) => {
        state.accounts = action.payload;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.accounts.push(action.payload);
      })
      .addCase(updateAccount.fulfilled, (state, action) => {
        const idx = state.accounts.findIndex(a => a._id === action.payload._id);
        if (idx !== -1) state.accounts[idx] = action.payload;
      })
      .addCase(deleteAccount.fulfilled, (state, action) => {
        state.accounts = state.accounts.filter(a => a._id !== action.payload);
      });
  },
});

export default accountsSlice.reducer;
