import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const res = await axios.get('/api/admin/products', { withCredentials: true });
  return res.data;
});

export const createProduct = createAsyncThunk('products/createProduct', async (formData) => {
  const res = await axios.post('/api/admin/products', formData, { withCredentials: true, headers: { 'Content-Type': 'multipart/form-data' } });
  return res.data;
});

export const updateProduct = createAsyncThunk('products/updateProduct', async ({ id, formData }) => {
  const res = await axios.put(`/api/admin/products/${id}`, formData, { withCredentials: true, headers: { 'Content-Type': 'multipart/form-data' } });
  return res.data;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
  await axios.delete(`/api/admin/products/${id}`, { withCredentials: true });
  return id;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: { products: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const idx = state.products.findIndex(p => p._id === action.payload._id);
        if (idx !== -1) state.products[idx] = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(p => p._id !== action.payload);
      });
  },
});

export default productsSlice.reducer;
