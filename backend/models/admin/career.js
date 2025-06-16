const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, enum: ['open', 'closed'], default: 'open' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AdminCareer', careerSchema);
