import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Career from './pages/Career';
import Policy from './pages/Policy';
import Terms from './pages/Terms';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Blogs from './pages/Blogs';
import Catalogs from './pages/Catalogs';
import Brochures from './pages/Brochures';
import Courses from './pages/Courses';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import AdminDashboard from './pages/Admin/Dashboard';
import ClientDashboard from './pages/Client/Dashboard';
import UserDashboard from './pages/User/Dashboard';
import Leads from './pages/CRM/Leads';
import BlogSingle from './pages/Blog/BlogSingle';
import SingleCatalog from './pages/Catalogs/SingleCatalog';
import SingleService from './pages/Services/SingleService';
import './App.css';

function PrivateRoute({ children, roles }) {
  // You can enhance this with Redux auth state
  const user = null; // Replace with useSelector if needed
  if (!user) return <Navigate to="/login" />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/" />;
  return children;
}

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  return (
    <>
      {!isAdminRoute && <Header />}
      <main className={!isAdminRoute ? "pt-16 min-h-screen bg-gray-50" : "min-h-screen bg-gray-50"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/services/:id" element={<SingleService />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogSingle />} />
          <Route path="/catalogs" element={<Catalogs />} />
          <Route path="/catalogs/:id" element={<SingleCatalog />} />
          <Route path="/brochures" element={<Brochures />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/client/*" element={<ClientDashboard />} />
          <Route path="/user/*" element={<UserDashboard />} />
          <Route path="/crm/leads" element={<Leads />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
