const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String, // image filename or URL
  status: { type: String, enum: ['published', 'draft'], default: 'draft' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AdminBlog', blogSchema);
