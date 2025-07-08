import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeads, deleteLead } from '../../../features/admin/leads/crmSlice';
import LeadForm from './LeadForm';

const LeadsDashboard = () => {
  const dispatch = useDispatch();
  const leads = useSelector((state) => state.crm.leads || []);
  const [editData, setEditData] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    dispatch(fetchLeads());
  }, [dispatch]);

  const handleEdit = (lead) => {
    setEditData(lead);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this lead?')) {
      dispatch(deleteLead(id));
      setNotification('Lead deleted!');
    }
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditData(null);
    dispatch(fetchLeads());
    setNotification('Lead saved!');
  };

  useEffect(() => {
    if (notification) {
      const t = setTimeout(() => setNotification(null), 2000);
      return () => clearTimeout(t);
    }
  }, [notification]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Leads</h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          onClick={() => { setShowForm(true); setEditData(null); }}
        >
          Add Lead
        </button>
      </div>
      {notification && <div className="mb-4 text-green-600 font-semibold">{notification}</div>}
      <div className="overflow-x-auto rounded-xl shadow">
        <table className="min-w-full bg-white rounded-xl">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{lead.name}</td>
                <td className="px-4 py-2">{lead.email}</td>
                <td className="px-4 py-2 capitalize">{lead.status}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                    onClick={() => handleEdit(lead)}
                  >Edit</button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    onClick={() => handleDelete(lead._id)}
                  >Delete</button>
                </td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr><td colSpan={4} className="text-center py-6 text-gray-400">No leads found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
            <button className="absolute top-2 right-2 text-gray-500 text-2xl font-bold" onClick={() => setShowForm(false)}>&times;</button>
            <LeadForm editData={editData} onSuccess={handleFormSuccess} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadsDashboard;
