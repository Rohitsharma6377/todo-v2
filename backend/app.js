const express = require('express');
const mongoose = require('mongoose');
const session = require('./config/session');
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
const cors = require('cors');
const passport = require('passport');
const authGoogleRoutes = require('./routes/authGoogleRoutes');
require('dotenv').config();

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(session);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
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
app.use('/api/auth', authGoogleRoutes);

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
