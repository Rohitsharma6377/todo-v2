import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaTachometerAlt, FaBox, FaBlog, FaEnvelope, FaProjectDiagram, FaChartBar, FaSearch, FaServicestack, FaMoneyCheckAlt, FaImages, FaBook, FaTags, FaBriefcase, FaUserTie, FaUsers, FaClipboardList, FaShoppingCart, FaHeart, FaUserCircle, FaCog, FaBars, FaMoon, FaSun, FaBell
} from 'react-icons/fa';

const sidebarItems = [
  { label: 'Dashboard', icon: <FaTachometerAlt />, path: '/admin' },
  { label: 'Products', icon: <FaBox />, path: '/admin/products' },
  { label: 'Blogs', icon: <FaBlog />, path: '/admin/blogs' },
  { label: 'Emails', icon: <FaEnvelope />, path: '/admin/emails' },
  { label: 'Projects', icon: <FaProjectDiagram />, path: '/admin/projects' },
  { label: 'Reports', icon: <FaChartBar />, path: '/admin/reports' },
  { label: 'SEO', icon: <FaSearch />, path: '/admin/seo' },
  { label: 'Services', icon: <FaServicestack />, path: '/admin/services' },
  { label: 'Payments', icon: <FaMoneyCheckAlt />, path: '/admin/payments' },
  { label: 'Portfolio', icon: <FaImages />, path: '/admin/portfolio' },
  { label: 'Courses', icon: <FaBook />, path: '/admin/course' },
  { label: 'Catalogs', icon: <FaTags />, path: '/admin/catalogs' },
  { label: 'Career', icon: <FaBriefcase />, path: '/admin/career' },
  { label: 'Accounts', icon: <FaUserTie />, path: '/admin/accounts' },
  { label: 'Leads', icon: <FaClipboardList />, path: '/admin/leads' },
  { label: 'Users', icon: <FaUsers />, path: '/admin/users' },
  { label: 'Orders', icon: <FaClipboardList />, path: '/admin/orders' },
  { label: 'Cart', icon: <FaShoppingCart />, path: '/admin/cart' },
  { label: 'Wishlist', icon: <FaHeart />, path: '/admin/wishlist' },
  { label: 'Profile', icon: <FaUserCircle />, path: '/admin/profile' },
  { label: 'Settings', icon: <FaCog />, path: '/admin/settings' },
];

function useDarkMode() {
  const [dark, setDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches || document.documentElement.classList.contains('dark')
  );
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);
  return [dark, setDark];
}

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Remove dark mode logic
  // const [dark, setDark] = useDarkMode();
  const location = useLocation();

  return (
    <div className="min-h-screen w-full flex bg-gradient-to-br from-blue-50 via-green-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient-x">
      {/* Sidebar - static, scrollable if needed */}
      <aside className="z-30 h-screen w-72 bg-white/60 dark:bg-gray-900/70 shadow-2xl border-r border-gray-200 dark:border-gray-800 backdrop-blur-lg flex flex-col fixed left-0 top-0">
        <div className="flex flex-col items-center gap-2 px-6 py-6 border-b border-gray-200 dark:border-gray-800">
          <img src="/logo192.png" alt="Admin Logo" className="w-14 h-14 rounded-full shadow-lg border-4 border-green-400 bg-white" />
          <span className="font-extrabold text-2xl text-green-600 tracking-wide">Admin Panel</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 custom-scrollbar">
          {sidebarItems.map(item => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl mx-3 my-1 text-lg font-medium transition relative
                ${location.pathname === item.path
                  ? 'bg-slate-800 text-white shadow-lg border-l-4 border-slate-700'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-slate-100/60 dark:hover:bg-slate-800/60'}
              `}
            >
              <span className={`text-xl flex items-center justify-center w-8 h-8 rounded-full ${location.pathname === item.path ? 'bg-slate-700 text-white' : 'bg-gray-100 dark:bg-gray-800'}`}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Removed dark mode button */}
      </aside>
      {/* Main content - full page, no header/footer, margin for sidebar */}
      <div className="flex-1 min-h-screen ml-0 md:ml-72 flex flex-col">
        <main className="flex-1 p-10 bg-gradient-to-br from-white/60 via-blue-50/60 to-green-50/60 dark:from-gray-900/60 dark:via-gray-800/60 dark:to-gray-900/60 rounded-3xl mt-6 mx-4 shadow-xl">
          {children || (
            <div className="grid md:grid-cols-3 gap-10">
              {/* Users Card */}
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200 group relative overflow-hidden">
                <span className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-400/30 to-blue-400/30 rounded-full blur-2xl opacity-60 animate-pulse" />
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-400 text-white text-3xl shadow-lg mb-4 border-4 border-white dark:border-gray-900"><FaUsers /></span>
                <h2 className="text-2xl font-bold mb-2">Users</h2>
                <p className="text-gray-600 dark:text-gray-300">Manage all users, roles, and permissions.</p>
              </div>
              {/* Products Card */}
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200 group relative overflow-hidden">
                <span className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-400/30 to-blue-400/30 rounded-full blur-2xl opacity-60 animate-pulse" />
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-400 text-white text-3xl shadow-lg mb-4 border-4 border-white dark:border-gray-900"><FaBox /></span>
                <h2 className="text-2xl font-bold mb-2">Products</h2>
                <p className="text-gray-600 dark:text-gray-300">View, add, and edit products in your catalog.</p>
              </div>
              {/* Reports Card */}
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200 group relative overflow-hidden">
                <span className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-400/30 to-blue-400/30 rounded-full blur-2xl opacity-60 animate-pulse" />
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-400 text-white text-3xl shadow-lg mb-4 border-4 border-white dark:border-gray-900"><FaChartBar /></span>
                <h2 className="text-2xl font-bold mb-2">Reports</h2>
                <p className="text-gray-600 dark:text-gray-300">See analytics and reports for your business.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
