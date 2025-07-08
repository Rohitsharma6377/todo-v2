import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, MoonIcon, SunIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { logout } from '../features/auth/authSlice';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services', dropdown: [
    { name: 'Consulting', to: '/services/consulting' },
    { name: 'Development', to: '/services/development' },
    { name: 'Support', to: '/services/support' },
  ]},
  { name: 'Clients', to: '/clients' },
  { name: 'Blogs', to: '/blogs' },
  { name: 'Catalogs', to: '/catalogs' },
  { name: 'Brochures', to: '/brochures' },
  { name: 'Courses', to: '/courses' },
  { name: 'Career', to: '/career' },
  { name: 'Contact Us', to: '/contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fix dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Listen to system theme changes
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => setDarkMode(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setUserMenuOpen(false);
    navigate('/login');
  };

  return (
    <header className="fixed w-full z-50 bg-white/60 dark:bg-gray-900/70 backdrop-blur-md shadow-lg rounded-b-xl md:rounded-xl mx-auto mt-2 max-w-7xl left-0 right-0">
      <nav className="px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo & Brand */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo192.png" alt="Netcurion Logo" className="h-8 w-8 rounded-full shadow" />
            <span className="font-bold text-xl text-indigo-700 dark:text-indigo-300 tracking-wide">Netcurion Technology</span>
          </Link>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative group">
                <button
                  className="flex items-center gap-1 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
                  onClick={() => setServicesOpen((open) => !open)}
                  onBlur={() => setTimeout(() => setServicesOpen(false), 200)}
                >
                  <span>{link.name}</span>
                  <ChevronDownIcon className="h-4 w-4" />
                </button>
                <div
                  className={`absolute left-0 mt-2 w-40 bg-white dark:bg-gray-900 rounded shadow-lg py-2 transition-all duration-200 ${servicesOpen ? 'block' : 'hidden'}`}
                >
                  {link.dropdown.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-800 ${isActive ? 'font-semibold text-indigo-600 dark:text-indigo-300' : ''}`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-900 transition ${isActive ? 'font-semibold text-indigo-700 dark:text-indigo-300' : 'text-gray-700 dark:text-gray-200'}`
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>
        {/* Auth/User Toggle */}
        <div className="hidden md:flex items-center space-x-2">
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition">Login</Link>
              <Link to="/register" className="px-4 py-2 rounded bg-white border border-indigo-600 text-indigo-700 hover:bg-indigo-50 transition">Sign Up</Link>
            </>
          ) : (
            <div className="relative">
              <button
                className="flex items-center gap-2 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
                onClick={() => setUserMenuOpen((open) => !open)}
                onBlur={() => setTimeout(() => setUserMenuOpen(false), 200)}
              >
                <UserCircleIcon className="h-7 w-7 text-indigo-700 dark:text-indigo-300" />
                <span className="font-semibold text-indigo-700 dark:text-indigo-300">{user?.username || 'User'}</span>
              </button>
              <div className={`absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 rounded shadow-lg py-2 transition-all duration-200 ${userMenuOpen ? 'block' : 'hidden'}`}>
                <Link to={`/${user?.role || 'user'}/dashboard`} className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-800">Dashboard</Link>
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900">Logout</button>
              </div>
            </div>
          )}
        </div>
        {/* Dark/Light Toggle */}
        <button
          className="ml-4 p-2 rounded-full bg-indigo-100 dark:bg-gray-800 hover:bg-indigo-200 dark:hover:bg-gray-700 transition"
          onClick={() => setDarkMode((d) => !d)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <SunIcon className="h-5 w-5 text-yellow-400" /> : <MoonIcon className="h-5 w-5 text-indigo-700" />}
        </button>
        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-900"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-gray-900/95 backdrop-blur-md shadow-lg px-4 py-4 space-y-2 rounded-b-xl">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative">
                <button
                  className="flex items-center gap-1 w-full px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
                  onClick={() => setServicesOpen((open) => !open)}
                >
                  <span>{link.name}</span>
                  <ChevronDownIcon className="h-4 w-4" />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-800 ${isActive ? 'font-semibold text-indigo-600 dark:text-indigo-300' : ''}`
                        }
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-900 transition ${isActive ? 'font-semibold text-indigo-700 dark:text-indigo-300' : 'text-gray-700 dark:text-gray-200'}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            )
          )}
          {/* Auth/User Toggle Mobile */}
          <div className="flex gap-2 mt-4">
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="flex-1 px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition text-center">Login</Link>
                <Link to="/register" className="flex-1 px-4 py-2 rounded bg-white border border-indigo-600 text-indigo-700 hover:bg-indigo-50 transition text-center">Sign Up</Link>
              </>
            ) : (
              <div className="relative w-full">
                <button
                  className="flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
                  onClick={() => setUserMenuOpen((open) => !open)}
                >
                  <UserCircleIcon className="h-7 w-7 text-indigo-700 dark:text-indigo-300" />
                  <span className="font-semibold text-indigo-700 dark:text-indigo-300">{user?.username || 'User'}</span>
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 rounded shadow-lg py-2 transition-all duration-200 z-50">
                    <Link to={`/${user?.role || 'user'}/dashboard`} className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-800">Dashboard</Link>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900">Logout</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 