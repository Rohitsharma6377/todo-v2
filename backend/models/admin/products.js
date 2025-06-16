const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String, // image filename or URL
  sku: { type: String, unique: true },
  price: Number,
  subscription: {
    enabled: { type: Boolean, default: false },
    interval: { type: String, enum: ['month', 'year'], default: 'month' },
    stripePriceId: String
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AdminProduct', productSchema);
