const Career = require('../../models/admin/career');

exports.createCareer = async (req, res) => {
  try {
    const career = new Career(req.body);
    await career.save();
    res.status(201).json(career);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCareers = async (req, res) => {
  try {
    const careers = await Career.find();
    res.json(careers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateCareer = async (req, res) => {
  try {
    const career = await Career.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(career);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCareer = async (req, res) => {
  try {
    await Career.findByIdAndDelete(req.params.id);
    res.json({ message: 'Career deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
