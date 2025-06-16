import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLeads = createAsyncThunk('crm/fetchLeads', async () => {
  const res = await axios.get('/api/leads', { withCredentials: true });
  return res.data;
});

export const createLead = createAsyncThunk('crm/createLead', async (lead) => {
  const res = await axios.post('/api/leads', lead, { withCredentials: true });
  return res.data;
});

const crmSlice = createSlice({
  name: 'crm',
  initialState: { leads: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeads.fulfilled, (state, action) => {
        state.leads = action.payload;
      })
      .addCase(createLead.fulfilled, (state, action) => {
        state.leads.push(action.payload);
      });
  },
});

export default crmSlice.reducer;
