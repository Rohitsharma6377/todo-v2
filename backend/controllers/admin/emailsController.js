const Email = require('../../models/admin/emails');

exports.createEmail = async (req, res) => {
  try {
    const email = new Email(req.body);
    await email.save();
    res.status(201).json(email);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getEmails = async (req, res) => {
  try {
    const emails = await Email.find();
    res.json(emails);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateEmail = async (req, res) => {
  try {
    const email = await Email.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(email);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteEmail = async (req, res) => {
  try {
    await Email.findByIdAndDelete(req.params.id);
    res.json({ message: 'Email deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
