const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminProduct' },
      quantity: { type: Number, default: 1 }
    }
  ]
});

module.exports = mongoose.model('Cart', cartSchema);
