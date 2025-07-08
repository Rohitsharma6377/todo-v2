import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { register, clearError } from '../../features/auth/authSlice';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated, user } = useSelector((state) => state.auth);
  
  const [form, setForm] = useState({ 
    username: '', 
    email: '', 
    password: '', 
    confirmPassword: '',
    role: 'user' 
  });

  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (isAuthenticated && user) {
      toast.success(`Welcome, ${user.username || user.email}! Account created.`, {
        style: {
          borderRadius: '12px',
          background: '#0f172a',
          color: '#fff',
          boxShadow: '0 4px 24px rgba(16,185,129,0.15)',
          fontWeight: 600,
        },
        icon: '🎉',
      });
      // Redirect based on user role
      if (user.role === 'admin') {
        navigate('/admin/dashboard');
      } else if (user.role === 'client') {
        navigate('/client/dashboard');
      } else {
        navigate('/user/dashboard');
      }
    }
  }, [isAuthenticated, user, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        style: {
          borderRadius: '12px',
          background: '#fff1f2',
          color: '#b91c1c',
          fontWeight: 600,
          boxShadow: '0 4px 24px rgba(239,68,68,0.10)',
        },
        icon: '❌',
      });
    }
  }, [error]);

  useEffect(() => {
    // Clear any previous errors when component mounts
    dispatch(clearError());
  }, [dispatch]);

  const validateForm = () => {
    const errors = {};
    
    if (!form.username.trim()) {
      errors.username = 'Username is required';
    } else if (form.username.length < 3) {
      errors.username = 'Username must be at least 3 characters';
    }
    
    if (!form.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!form.password) {
      errors.password = 'Password is required';
    } else if (form.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    if (form.password !== form.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear validation error when user starts typing
    if (validationErrors[e.target.name]) {
      setValidationErrors({ ...validationErrors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const { confirmPassword, ...userData } = form;
    dispatch(register(userData));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col md:flex-row bg-white/80 dark:bg-gray-900/80 shadow-2xl rounded-3xl overflow-hidden max-w-3xl w-full">
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-green-400/80 to-blue-500/80 p-10 w-96">
          <img src="https://undraw.co/api/illustrations/2e1b7e7e-7e2e-4e2e-8e2e-7e2e8e2e7e2e" alt="Register Illustration" className="w-64 h-64 object-contain mb-6" />
          <h2 className="text-2xl font-bold text-white mb-2">Join Netcurion!</h2>
          <p className="text-white/90 text-center">Create your account and unlock powerful features for your business.</p>
        </div>
        <div className="flex-1 flex flex-col justify-center p-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-6">Create your account</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
            <div className="space-y-4">
              <input
                id="username"
                name="username"
                type="text"
                required
                className="block w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-900 dark:bg-gray-800 dark:text-white"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
              />
              {validationErrors.username && (
                <p className="text-sm text-red-600">{validationErrors.username}</p>
              )}
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-900 dark:bg-gray-800 dark:text-white"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
              />
              {validationErrors.email && (
                <p className="text-sm text-red-600">{validationErrors.email}</p>
              )}
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-900 dark:bg-gray-800 dark:text-white"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
              {validationErrors.password && (
                <p className="text-sm text-red-600">{validationErrors.password}</p>
              )}
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-900 dark:bg-gray-800 dark:text-white"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={handleChange}
              />
              {validationErrors.confirmPassword && (
                <p className="text-sm text-red-600">{validationErrors.confirmPassword}</p>
              )}
              <select
                id="role"
                name="role"
                value={form.role}
                onChange={handleChange}
                className="block w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-900 dark:bg-gray-800 dark:text-white"
              >
                <option value="user">User</option>
                <option value="client">Client</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-green-500 text-white font-semibold shadow-lg hover:bg-green-600 transition disabled:opacity-50"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
            Or{' '}
            <Link to="/login" className="font-medium text-green-600 hover:text-green-500">sign in to your existing account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
