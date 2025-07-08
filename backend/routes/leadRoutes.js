const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');
const roleAuth = require('../middleware/roleAuth');

router.post('/', roleAuth(['admin', 'client']), leadController.createLead);
router.get('/', roleAuth(['admin', 'client']), leadController.getLeads);
router.put('/:id', roleAuth(['admin', 'client']), leadController.updateLead);
router.delete('/:id', roleAuth(['admin', 'client']), leadController.deleteLead);

module.exports = router;
