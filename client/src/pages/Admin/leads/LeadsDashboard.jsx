import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeads, deleteLead } from '../../../features/admin/leads/crmSlice';
import LeadForm from './LeadForm';

const LeadsDashboard = () => {
  const dispatch = useDispatch();
  const leads = useSelector((state) => state.crm.leads || []);
  const [editData, setEditData] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchLeads());
  }, [dispatch]);

  const handleEdit = (lead) => {
    setEditData(lead);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteLead(id));
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditData(null);
    dispatch(fetchLeads());
  };

  return (
    <div>
      <h2>Leads</h2>
      <button onClick={() => { setShowForm(true); setEditData(null); }}>Add Lead</button>
      {showForm && <LeadForm editData={editData} onSuccess={handleFormSuccess} />}
      <ul>
        {leads.map((lead) => (
          <li key={lead._id}>
            {lead.name} - {lead.email} - {lead.status}
            <button onClick={() => handleEdit(lead)}>Edit</button>
            <button onClick={() => handleDelete(lead._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadsDashboard;
