const Lead = require('../crm/Lead');

exports.createLead = async (req, res) => {
  try {
    const { name, email, status, notes } = req.body;
    const lead = new Lead({ name, email, status, notes, createdBy: req.session.user.id });
    await lead.save();
    res.status(201).json(lead);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find({ createdBy: req.session.user.id });
    res.json(leads);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
