const mongoose = require('mongoose');

const catalogSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AdminCatalog', catalogSchema);
