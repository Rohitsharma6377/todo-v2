import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createAccount, updateAccount } from '../../../features/admin/accounts/accountsSlice';

const AccountForm = ({ editData, onSuccess }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(editData || { name: '', email: '', status: 'active' });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      dispatch(updateAccount({ id: editData._id, data: form })).then(onSuccess);
    } else {
      dispatch(createAccount(form)).then(onSuccess);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <button type="submit">{editData ? 'Update' : 'Add'} Account</button>
    </form>
  );
};

export default AccountForm;
