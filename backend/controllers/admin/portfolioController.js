const Portfolio = require('../../models/admin/portfolio');

exports.createPortfolio = async (req, res) => {
  try {
    const portfolio = new Portfolio(req.body);
    await portfolio.save();
    res.status(201).json(portfolio);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.json(portfolios);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(portfolio);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletePortfolio = async (req, res) => {
  try {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.json({ message: 'Portfolio deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
