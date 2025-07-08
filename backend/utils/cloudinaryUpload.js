const cloudinary = require('../config/cloudinary');
const axios = require('axios');

// Upload file to Cloudinary using file buffer
const uploadToCloudinary = async (fileBuffer, folder = 'general') => {
  try {
    // Convert buffer to base64
    const base64String = fileBuffer.toString('base64');
    const dataURI = `data:image/jpeg;base64,${base64String}`;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: folder,
      resource_type: 'auto',
      transformation: [
        { width: 1000, height: 1000, crop: 'limit' },
        { quality: 'auto' }
      ]
    });

    return {
      url: result.secure_url,
      public_id: result.public_id,
      width: result.width,
      height: result.height
    };
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('Failed to upload file to Cloudinary');
  }
};

// Upload file from URL to Cloudinary
const uploadFromUrl = async (imageUrl, folder = 'general') => {
  try {
    // Download image from URL
    const response = await axios.get(imageUrl, {
      responseType: 'arraybuffer'
    });

    const buffer = Buffer.from(response.data, 'binary');
    return await uploadToCloudinary(buffer, folder);
  } catch (error) {
    console.error('Upload from URL error:', error);
    throw new Error('Failed to upload image from URL');
  }
};

// Delete file from Cloudinary
const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error('Cloudinary delete error:', error);
    throw new Error('Failed to delete file from Cloudinary');
  }
};

// Upload multiple files
const uploadMultipleFiles = async (files, folder = 'general') => {
  try {
    const uploadPromises = files.map(file => uploadToCloudinary(file.buffer, folder));
    const results = await Promise.all(uploadPromises);
    return results;
  } catch (error) {
    console.error('Multiple upload error:', error);
    throw new Error('Failed to upload multiple files');
  }
};

module.exports = {
  uploadToCloudinary,
  uploadFromUrl,
  deleteFromCloudinary,
  uploadMultipleFiles
}; 