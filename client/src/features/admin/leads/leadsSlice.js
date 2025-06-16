import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLeads = createAsyncThunk('leads/fetchLeads', async () => {
  const res = await axios.get('/api/admin/leads', { withCredentials: true });
  return res.data;
});

export const createLead = createAsyncThunk('leads/createLead', async (lead) => {
  const res = await axios.post('/api/admin/leads', lead, { withCredentials: true });
  return res.data;
});

export const updateLead = createAsyncThunk('leads/updateLead', async ({ id, data }) => {
  const res = await axios.put(`/api/admin/leads/${id}`, data, { withCredentials: true });
  return res.data;
});

export const deleteLead = createAsyncThunk('leads/deleteLead', async (id) => {
  await axios.delete(`/api/admin/leads/${id}`, { withCredentials: true });
  return id;
});

const leadsSlice = createSlice({
  name: 'leads',
  initialState: { leads: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeads.fulfilled, (state, action) => {
        state.leads = action.payload;
      })
      .addCase(createLead.fulfilled, (state, action) => {
        state.leads.push(action.payload);
      })
      .addCase(updateLead.fulfilled, (state, action) => {
        const idx = state.leads.findIndex(l => l._id === action.payload._id);
        if (idx !== -1) state.leads[idx] = action.payload;
      })
      .addCase(deleteLead.fulfilled, (state, action) => {
        state.leads = state.leads.filter(l => l._id !== action.payload);
      });
  },
});

export default leadsSlice.reducer;
