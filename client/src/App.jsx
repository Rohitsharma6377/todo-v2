import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import AdminDashboard from './pages/Admin/Dashboard';
import ClientDashboard from './pages/Client/Dashboard';
import UserDashboard from './pages/User/Dashboard';
import Leads from './pages/CRM/Leads';
import './App.css';

function PrivateRoute({ children, roles }) {
  const user = useSelector((state) => state.auth.user);
  if (!user) return <Navigate to="/login" />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/" />;
  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<PrivateRoute roles={['admin']}><AdminDashboard /></PrivateRoute>} />
        <Route path="/client" element={<PrivateRoute roles={['client']}><ClientDashboard /></PrivateRoute>} />
        <Route path="/user" element={<PrivateRoute roles={['user']}><UserDashboard /></PrivateRoute>} />
        <Route path="/crm/leads" element={<PrivateRoute roles={['admin','client']}><Leads /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
