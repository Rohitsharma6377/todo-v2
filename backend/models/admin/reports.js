const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  title: String,
  content: String,
  status: { type: String, enum: ['open', 'closed'], default: 'open' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AdminReport', reportSchema);
