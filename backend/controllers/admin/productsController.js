const Product = require('../../models/admin/products');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createProduct = async (req, res) => {
  try {
    const { name, description, sku, price, subscription } = req.body;
    const image = req.file ? req.file.filename : null;
    let stripePriceId = null;
    if (subscription && subscription.enabled) {
      // Create Stripe product and price
      const stripeProduct = await stripe.products.create({ name });
      const stripePrice = await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: Math.round(Number(price) * 100),
        currency: 'usd',
        recurring: { interval: subscription.interval || 'month' }
      });
      stripePriceId = stripePrice.id;
    }
    const product = new Product({
      name,
      description,
      image,
      sku,
      price,
      subscription: subscription ? { ...subscription, stripePriceId } : undefined
    });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, description, sku, price, subscription } = req.body;
    const update = { name, description, sku, price };
    if (req.file) update.image = req.file.filename;
    if (subscription) update.subscription = subscription;
    const product = await Product.findByIdAndUpdate(req.params.id, update, { new: true });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Stripe checkout session for product purchase/subscription
exports.createCheckoutSession = async (req, res) => {
  try {
    const { priceId } = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: process.env.FRONTEND_URL + '/success',
      cancel_url: process.env.FRONTEND_URL + '/cancel',
    });
    res.json({ url: session.url });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
