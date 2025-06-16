const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  amount: Number,
  user: String,
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AdminPayment', paymentSchema);
