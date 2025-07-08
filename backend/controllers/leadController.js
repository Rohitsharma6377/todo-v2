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

exports.updateLead = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const lead = await Lead.findOneAndUpdate(
      { _id: id, createdBy: req.session.user.id },
      update,
      { new: true }
    );
    if (!lead) return res.status(404).json({ error: 'Lead not found' });
    res.json(lead);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteLead = async (req, res) => {
  try {
    const { id } = req.params;
    const lead = await Lead.findOneAndDelete({ _id: id, createdBy: req.session.user.id });
    if (!lead) return res.status(404).json({ error: 'Lead not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
