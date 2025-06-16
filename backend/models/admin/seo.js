const mongoose = require('mongoose');

const seoSchema = new mongoose.Schema({
  page: String,
  title: String,
  description: String,
  keywords: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AdminSeo', seoSchema);
