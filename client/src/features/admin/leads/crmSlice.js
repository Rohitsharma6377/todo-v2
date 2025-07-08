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

export const updateLead = createAsyncThunk('crm/updateLead', async ({ id, data }) => {
  const res = await axios.put(`/api/leads/${id}`, data, { withCredentials: true });
  return res.data;
});

export const deleteLead = createAsyncThunk('crm/deleteLead', async (id) => {
  await axios.delete(`/api/leads/${id}`, { withCredentials: true });
  return id;
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

export default crmSlice.reducer;
