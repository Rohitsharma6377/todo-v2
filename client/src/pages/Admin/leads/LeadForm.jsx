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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg space-y-4 w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-2 text-center">{editData ? 'Edit Lead' : 'Add Lead'}</h3>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Name</label>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Status</label>
        <select name="status" value={form.status} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="converted">Converted</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">{editData ? 'Update' : 'Add'} Lead</button>
    </form>
  );
};

export default LeadForm;
