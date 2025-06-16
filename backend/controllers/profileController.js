const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.session.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.findByIdAndUpdate(req.session.user.id, { username, email }, { new: true }).select('-password');
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
