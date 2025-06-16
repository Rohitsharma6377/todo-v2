const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  status: { type: String, enum: ['new', 'contacted', 'converted'], default: 'new' },
  notes: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AdminLead', leadSchema);
