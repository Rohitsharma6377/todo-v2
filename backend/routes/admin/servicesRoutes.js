const express = require('express');
const router = express.Router();
const servicesController = require('../../controllers/admin/servicesController');
const roleAuth = require('../../middleware/roleAuth');

router.post('/', roleAuth(['admin']), servicesController.createService);
router.get('/', roleAuth(['admin']), servicesController.getServices);
router.put('/:id', roleAuth(['admin']), servicesController.updateService);
router.delete('/:id', roleAuth(['admin']), servicesController.deleteService);

module.exports = router;
