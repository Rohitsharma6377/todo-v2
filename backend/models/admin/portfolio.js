const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AdminPortfolio', portfolioSchema);
