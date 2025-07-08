const express = require('express');
const router = express.Router();
const { 
  register, 
  login, 
  logout, 
  getCurrentUser, 
  createAdmin, 
  getAllUsers, 
  updateUserRole, 
  deleteUser 
} = require('../controllers/authController');
const { isAuthenticated, isAdmin, hasRole } = require('../middleware/auth');

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

// Protected routes
router.get('/me', isAuthenticated, getCurrentUser);

// Admin only routes
router.post('/admin', isAuthenticated, isAdmin, createAdmin);
router.get('/users', isAuthenticated, isAdmin, getAllUsers);
router.put('/users/:userId/role', isAuthenticated, isAdmin, updateUserRole);
router.delete('/users/:userId', isAuthenticated, isAdmin, deleteUser);

module.exports = router;
