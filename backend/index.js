const express = require('express');
const connectDB = require('./utils/db');
const cors = require('cors');
const session = require('./config/session');
const passport = require('passport');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
const path = require('path');
const dotenv = require('dotenv');
const colors = require('colors');

// Route imports from app.js
const authRoutes = require('./routes/authRoutes');
const leadRoutes = require('./routes/leadRoutes');
const adminAccountRoutes = require('./routes/admin/accountRoutes');
const adminLeadsRoutes = require('./routes/admin/leadsRoutes');
const adminAccountsRoutes = require('./routes/admin/accountsRoutes');
const adminCareerRoutes = require('./routes/admin/careerRoutes');
const adminCatalogsRoutes = require('./routes/admin/catalogsRoutes');
const adminCourseRoutes = require('./routes/admin/courseRoutes');
const adminPortfolioRoutes = require('./routes/admin/portfolioRoutes');
const adminBlogsRoutes = require('./routes/admin/blogsRoutes');
const adminEmailsRoutes = require('./routes/admin/emailsRoutes');
const adminProjectsRoutes = require('./routes/admin/projectsRoutes');
const adminReportsRoutes = require('./routes/admin/reportsRoutes');
const adminSeoRoutes = require('./routes/admin/seoRoutes');
const adminProductsRoutes = require('./routes/admin/productsRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');
const profileRoutes = require('./routes/profileRoutes');
const authGoogleRoutes = require('./routes/authGoogleRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

// Load env vars
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" }
}));

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Session configuration
app.use(session);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport');

// Public routes
app.use('/api/auth', authRoutes);
app.use('/api/auth', authGoogleRoutes);

// Protected routes with role-based authentication
app.use('/api/leads', leadRoutes);
app.use('/api/admin/accounts', adminAccountRoutes);
app.use('/api/admin/leads', adminLeadsRoutes);
app.use('/api/admin/accounts', adminAccountsRoutes);
app.use('/api/admin/career', adminCareerRoutes);
app.use('/api/admin/catalogs', adminCatalogsRoutes);
app.use('/api/admin/course', adminCourseRoutes);
app.use('/api/admin/portfolio', adminPortfolioRoutes);
app.use('/api/admin/blogs', adminBlogsRoutes);
app.use('/api/admin/emails', adminEmailsRoutes);
app.use('/api/admin/projects', adminProjectsRoutes);
app.use('/api/admin/reports', adminReportsRoutes);
app.use('/api/admin/seo', adminSeoRoutes);
app.use('/api/admin/products', adminProductsRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/profile', profileRoutes);

// Upload routes
app.use('/api/upload', uploadRoutes);

app.get('/', (req, res) => res.send('API Running'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  server.close(() => process.exit(1));
});

module.exports = app;