import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct, updateProduct } from '../../../features/admin/products/productsSlice';
import { TextField, Button, Box, FormControlLabel, Checkbox, MenuItem } from '@mui/material';

const ProductForm = ({ editData, onSuccess }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    description: '',
    sku: '',
    price: '',
    subscription: { enabled: false, interval: 'month' },
    image: null
  });

  useEffect(() => {
    if (editData) setForm({ ...editData, image: null });
  }, [editData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'enabled') {
      setForm({ ...form, subscription: { ...form.subscription, enabled: checked } });
    } else if (name === 'interval') {
      setForm({ ...form, subscription: { ...form.subscription, interval: value } });
    } else if (name === 'image') {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === 'subscription') {
        formData.append('subscription', JSON.stringify(value));
      } else if (key === 'image' && value) {
        formData.append('image', value);
      } else {
        formData.append(key, value);
      }
    });
    if (editData) {
      dispatch(updateProduct({ id: editData._id, formData })).then(onSuccess);
    } else {
      dispatch(createProduct(formData)).then(onSuccess);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
      <TextField name="name" label="Name" value={form.name} onChange={handleChange} required />
      <TextField name="description" label="Description" value={form.description} onChange={handleChange} required multiline rows={3} />
      <TextField name="sku" label="SKU" value={form.sku} onChange={handleChange} required />
      <TextField name="price" label="Price" value={form.price} onChange={handleChange} required type="number" />
      <FormControlLabel
        control={<Checkbox checked={form.subscription.enabled} onChange={handleChange} name="enabled" />}
        label="Enable Subscription"
      />
      {form.subscription.enabled && (
        <TextField
          select
          name="interval"
          label="Interval"
          value={form.subscription.interval}
          onChange={handleChange}
        >
          <MenuItem value="month">Monthly</MenuItem>
          <MenuItem value="year">Yearly</MenuItem>
        </TextField>
      )}
      <Button variant="contained" component="label">
        Upload Image
        <input type="file" name="image" hidden onChange={handleChange} />
      </Button>
      <Button type="submit" variant="contained" color="primary">
        {editData ? 'Update' : 'Add'} Product
      </Button>
    </Box>
  );
};

export default ProductForm;
