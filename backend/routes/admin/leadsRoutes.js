const express = require('express');
const router = express.Router();
const leadsController = require('../../controllers/admin/leadsController');
const roleAuth = require('../../middleware/roleAuth');

router.post('/', roleAuth(['admin']), leadsController.createLead);
router.get('/', roleAuth(['admin']), leadsController.getLeads);
router.put('/:id', roleAuth(['admin']), leadsController.updateLead);
router.delete('/:id', roleAuth(['admin']), leadsController.deleteLead);

module.exports = router;
