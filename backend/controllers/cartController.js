const Cart = require('../models/cart');

exports.getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.session.user.id }).populate('items.product');
    if (!cart) cart = new Cart({ user: req.session.user.id, items: [] });
    res.json(cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { product, quantity } = req.body;
    let cart = await Cart.findOne({ user: req.session.user.id });
    if (!cart) cart = new Cart({ user: req.session.user.id, items: [] });
    const idx = cart.items.findIndex(i => i.product.toString() === product);
    if (idx > -1) {
      cart.items[idx].quantity += quantity;
    } else {
      cart.items.push({ product, quantity });
    }
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const { product, quantity } = req.body;
    let cart = await Cart.findOne({ user: req.session.user.id });
    if (!cart) return res.status(404).json({ error: 'Cart not found' });
    const idx = cart.items.findIndex(i => i.product.toString() === product);
    if (idx > -1) {
      cart.items[idx].quantity = quantity;
      await cart.save();
    }
    res.json(cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.removeCartItem = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.session.user.id });
    if (!cart) return res.status(404).json({ error: 'Cart not found' });
    cart.items = cart.items.filter(i => i.product.toString() !== req.params.productId);
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
