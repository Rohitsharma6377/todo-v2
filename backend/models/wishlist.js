const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AdminProduct' }]
});

module.exports = mongoose.model('Wishlist', wishlistSchema);
