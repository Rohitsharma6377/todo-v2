import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import { Button, Box } from '@mui/material';

const ProductsIndex = () => {
  const [editData, setEditData] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (product) => {
    setEditData(product);
    setShowForm(true);
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditData(null);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Button variant="contained" onClick={() => { setShowForm(true); setEditData(null); }}>
        Add Product
      </Button>
      {showForm && <ProductForm editData={editData} onSuccess={handleFormSuccess} />}
      <ProductList onEdit={handleEdit} />
    </Box>
  );
};

export default ProductsIndex;
