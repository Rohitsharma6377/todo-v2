const express = require('express');
const multer = require('multer');
const { isAuthenticated, isAdmin, hasRole } = require('../middleware/auth');
const { uploadToCloudinary, uploadMultipleFiles, deleteFromCloudinary } = require('../utils/cloudinaryUpload');

const router = express.Router();

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept images and documents
    if (file.mimetype.startsWith('image/') || 
        file.mimetype.startsWith('application/pdf') ||
        file.mimetype.startsWith('application/msword') ||
        file.mimetype.startsWith('application/vnd.openxmlformats-officedocument')) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only images and documents are allowed.'), false);
    }
  }
});

// Upload single file (Admin only)
router.post('/single', isAuthenticated, isAdmin, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const folder = req.body.folder || 'general';
    const result = await uploadToCloudinary(req.file.buffer, folder);

    res.json({
      success: true,
      data: result,
      message: 'File uploaded successfully'
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to upload file'
    });
  }
});

// Upload multiple files (Admin only)
router.post('/multiple', isAuthenticated, isAdmin, upload.array('files', 10), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No files uploaded' });
    }

    const folder = req.body.folder || 'general';
    const results = await uploadMultipleFiles(req.files, folder);

    res.json({
      success: true,
      data: results,
      message: `${results.length} files uploaded successfully`
    });
  } catch (error) {
    console.error('Multiple upload error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to upload files'
    });
  }
});

// Upload profile image (Authenticated users)
router.post('/profile', isAuthenticated, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const result = await uploadToCloudinary(req.file.buffer, 'profiles');

    res.json({
      success: true,
      data: result,
      message: 'Profile image uploaded successfully'
    });
  } catch (error) {
    console.error('Profile upload error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to upload profile image'
    });
  }
});

// Delete file (Admin only)
router.delete('/:publicId', isAuthenticated, isAdmin, async (req, res) => {
  try {
    const { publicId } = req.params;
    const result = await deleteFromCloudinary(publicId);

    res.json({
      success: true,
      data: result,
      message: 'File deleted successfully'
    });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to delete file'
    });
  }
});

// Upload blog images (Admin and Client roles)
router.post('/blog', isAuthenticated, hasRole(['admin', 'client']), upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const result = await uploadToCloudinary(req.file.buffer, 'blogs');

    res.json({
      success: true,
      data: result,
      message: 'Blog image uploaded successfully'
    });
  } catch (error) {
    console.error('Blog upload error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to upload blog image'
    });
  }
});

// Upload product images (Admin only)
router.post('/product', isAuthenticated, isAdmin, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const result = await uploadToCloudinary(req.file.buffer, 'products');

    res.json({
      success: true,
      data: result,
      message: 'Product image uploaded successfully'
    });
  } catch (error) {
    console.error('Product upload error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to upload product image'
    });
  }
});

module.exports = router; 