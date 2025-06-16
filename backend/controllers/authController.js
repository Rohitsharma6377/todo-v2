const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hash, role });
    await user.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });
    req.session.user = { id: user._id, role: user.role, username: user.username };
    res.json({ message: 'Logged in', user: req.session.user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.json({ message: 'Logged out' });
  });
};
