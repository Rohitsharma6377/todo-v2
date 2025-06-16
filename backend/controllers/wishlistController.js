const Wishlist = require('../models/wishlist');

exports.getWishlist = async (req, res) => {
  try {
    let wishlist = await Wishlist.findOne({ user: req.session.user.id }).populate('items');
    if (!wishlist) wishlist = new Wishlist({ user: req.session.user.id, items: [] });
    res.json(wishlist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.addToWishlist = async (req, res) => {
  try {
    const { product } = req.body;
    let wishlist = await Wishlist.findOne({ user: req.session.user.id });
    if (!wishlist) wishlist = new Wishlist({ user: req.session.user.id, items: [] });
    if (!wishlist.items.includes(product)) wishlist.items.push(product);
    await wishlist.save();
    res.json(wishlist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.removeFromWishlist = async (req, res) => {
  try {
    let wishlist = await Wishlist.findOne({ user: req.session.user.id });
    if (!wishlist) return res.status(404).json({ error: 'Wishlist not found' });
    wishlist.items = wishlist.items.filter(i => i.toString() !== req.params.productId);
    await wishlist.save();
    res.json(wishlist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
