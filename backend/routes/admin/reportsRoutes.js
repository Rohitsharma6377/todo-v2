const express = require('express');
const router = express.Router();
const reportsController = require('../../controllers/admin/reportsController');
const roleAuth = require('../../middleware/roleAuth');

router.post('/', roleAuth(['admin']), reportsController.createReport);
router.get('/', roleAuth(['admin']), reportsController.getReports);
router.put('/:id', roleAuth(['admin']), reportsController.updateReport);
router.delete('/:id', roleAuth(['admin']), reportsController.deleteReport);

module.exports = router;
