const express = require('express');
const router = express.Router();
const authGoogleController = require('../controllers/authGoogleController');

router.get('/google', authGoogleController.googleAuth);
router.get('/google/callback', authGoogleController.googleCallback);

module.exports = router;
