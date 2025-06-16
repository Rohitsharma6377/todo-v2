import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createLead, updateLead } from '../../../features/admin/leads/leadsSlice';

const LeadForm = ({ editData, onSuccess }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(editData || { name: '', email: '', status: 'new' });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      dispatch(updateLead({ id: editData._id, data: form })).then(onSuccess);
    } else {
      dispatch(createLead(form)).then(onSuccess);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="new">New</option>
        <option value="contacted">Contacted</option>
        <option value="converted">Converted</option>
      </select>
      <button type="submit">{editData ? 'Update' : 'Add'} Lead</button>
    </form>
  );
};

export default LeadForm;
