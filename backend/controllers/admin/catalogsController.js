const Catalog = require('../../models/admin/catalogs');

exports.createCatalog = async (req, res) => {
  try {
    const catalog = new Catalog(req.body);
    await catalog.save();
    res.status(201).json(catalog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCatalogs = async (req, res) => {
  try {
    const catalogs = await Catalog.find();
    res.json(catalogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateCatalog = async (req, res) => {
  try {
    const catalog = await Catalog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(catalog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCatalog = async (req, res) => {
  try {
    await Catalog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Catalog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
