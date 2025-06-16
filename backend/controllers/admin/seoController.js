const Seo = require('../../models/admin/seo');

exports.createSeo = async (req, res) => {
  try {
    const seo = new Seo(req.body);
    await seo.save();
    res.status(201).json(seo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getSeos = async (req, res) => {
  try {
    const seos = await Seo.find();
    res.json(seos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateSeo = async (req, res) => {
  try {
    const seo = await Seo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(seo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteSeo = async (req, res) => {
  try {
    await Seo.findByIdAndDelete(req.params.id);
    res.json({ message: 'SEO deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
