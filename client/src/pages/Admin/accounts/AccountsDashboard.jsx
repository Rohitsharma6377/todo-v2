import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccounts, deleteAccount } from '../../../features/admin/accounts/accountsSlice';
import AccountForm from './AccountForm';

const AccountsDashboard = () => {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.accounts.accounts);
  const [editData, setEditData] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchAccounts());
  }, [dispatch]);

  const handleEdit = (account) => {
    setEditData(account);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteAccount(id));
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditData(null);
    dispatch(fetchAccounts());
  };

  return (
    <div>
      <h2>Accounts</h2>
      <button onClick={() => { setShowForm(true); setEditData(null); }}>Add Account</button>
      {showForm && <AccountForm editData={editData} onSuccess={handleFormSuccess} />}
      <ul>
        {accounts.map((account) => (
          <li key={account._id}>
            {account.name} - {account.email} - {account.status}
            <button onClick={() => handleEdit(account)}>Edit</button>
            <button onClick={() => handleDelete(account._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountsDashboard;
