import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeads, createLead, updateLead, deleteLead } from '../../features/admin/leads/crmSlice';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const PAGE_SIZE = 5;

const emptyForm = { name: '', email: '', status: 'new', notes: '' };

const Leads = () => {
  const dispatch = useDispatch();
  const leads = useSelector((state) => state.crm.leads);
  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    dispatch(fetchLeads());
  }, [dispatch]);

  const filteredLeads = leads.filter(l =>
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.email.toLowerCase().includes(search.toLowerCase()) ||
    (l.status && l.status.toLowerCase().includes(search.toLowerCase()))
  );
  const totalPages = Math.ceil(filteredLeads.length / PAGE_SIZE);
  const paginatedLeads = filteredLeads.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNotesChange = (data) => {
    setForm({ ...form, notes: data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch(updateLead({ id: editId, data: form }))
        .then(() => setNotification('Lead updated!'));
    } else {
      dispatch(createLead(form))
        .then(() => setNotification('Lead added!'));
    }
    setShowForm(false);
    setEditId(null);
    setForm(emptyForm);
  };

  const handleEdit = (lead) => {
    setForm({
      name: lead.name,
      email: lead.email,
      status: lead.status || 'new',
      notes: lead.notes || ''
    });
    setEditId(lead._id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this lead?')) {
      dispatch(deleteLead(id)).then(() => setNotification('Lead deleted!'));
    }
  };

  const handleAdd = () => {
    setForm(emptyForm);
    setEditId(null);
    setShowForm(true);
  };

  useEffect(() => {
    if (notification) {
      const t = setTimeout(() => setNotification(null), 2000);
      return () => clearTimeout(t);
    }
  }, [notification]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Leads</h2>
      <div className="flex justify-between mb-2">
        <input
          className="border px-2 py-1 rounded"
          placeholder="Search leads..."
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
        />
        <button className="bg-blue-600 text-white px-4 py-1 rounded" onClick={handleAdd}>Add Lead</button>
      </div>
      {notification && <div className="mb-2 text-green-600">{notification}</div>}
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Name</th>
              <th className="border px-2 py-1">Email</th>
              <th className="border px-2 py-1">Status</th>
              <th className="border px-2 py-1">Notes</th>
              <th className="border px-2 py-1">Created</th>
              <th className="border px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedLeads.map(lead => (
              <tr key={lead._id} className="border-b">
                <td className="border px-2 py-1">{lead.name}</td>
                <td className="border px-2 py-1">{lead.email}</td>
                <td className="border px-2 py-1">{lead.status}</td>
                <td className="border px-2 py-1 max-w-xs truncate" title={lead.notes}>{lead.notes?.replace(/<[^>]+>/g, '').slice(0, 50)}...</td>
                <td className="border px-2 py-1">{lead.createdAt ? new Date(lead.createdAt).toLocaleString() : ''}</td>
                <td className="border px-2 py-1">
                  <button className="text-blue-600 mr-2" onClick={() => handleEdit(lead)}>Edit</button>
                  <button className="text-red-600" onClick={() => handleDelete(lead._id)}>Delete</button>
                </td>
              </tr>
            ))}
            {paginatedLeads.length === 0 && (
              <tr><td colSpan={6} className="text-center py-4">No leads found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-2 py-1 rounded ${page === i+1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setPage(i+1)}
          >{i+1}</button>
        ))}
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
            <button className="absolute top-2 right-2 text-gray-500" onClick={() => setShowForm(false)}>&times;</button>
            <h3 className="text-lg font-bold mb-2">{editId ? 'Edit Lead' : 'Add Lead'}</h3>
            <form onSubmit={handleSubmit}>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="border px-2 py-1 mb-2 w-full" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="border px-2 py-1 mb-2 w-full" />
              <select name="status" value={form.status} onChange={handleChange} className="border px-2 py-1 mb-2 w-full">
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="converted">Converted</option>
              </select>
              <CKEditor
                editor={ClassicEditor}
                data={form.notes}
                onChange={(event, editor) => handleNotesChange(editor.getData())}
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded mt-3 w-full">{editId ? 'Update' : 'Add'} Lead</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leads;
