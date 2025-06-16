import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeads, createLead } from '../../features/crm/crmSlice';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Leads = () => {
  const dispatch = useDispatch();
  const leads = useSelector((state) => state.crm.leads);
  const [form, setForm] = useState({ name: '', email: '', notes: '' });

  useEffect(() => {
    dispatch(fetchLeads());
  }, [dispatch]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNotesChange = (data) => {
    setForm({ ...form, notes: data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createLead(form));
    setForm({ name: '', email: '', notes: '' });
  };

  return (
    <div>
      <h2>Leads</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <CKEditor
          editor={ClassicEditor}
          data={form.notes}
          onChange={(event, editor) => handleNotesChange(editor.getData())}
        />
        <button type="submit">Add Lead</button>
      </form>
      <ul>
        {leads.map((lead) => (
          <li key={lead._id}>{lead.name} - {lead.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leads;
