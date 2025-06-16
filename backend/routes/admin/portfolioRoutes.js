const express = require('express');
const router = express.Router();
const portfolioController = require('../../controllers/admin/portfolioController');
const roleAuth = require('../../middleware/roleAuth');

router.post('/', roleAuth(['admin']), portfolioController.createPortfolio);
router.get('/', roleAuth(['admin']), portfolioController.getPortfolios);
router.put('/:id', roleAuth(['admin']), portfolioController.updatePortfolio);
router.delete('/:id', roleAuth(['admin']), portfolioController.deletePortfolio);

module.exports = router;
