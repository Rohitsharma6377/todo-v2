const express = require('express');
const router = express.Router();
const catalogsController = require('../../controllers/admin/catalogsController');
const roleAuth = require('../../middleware/roleAuth');

router.post('/', roleAuth(['admin']), catalogsController.createCatalog);
router.get('/', roleAuth(['admin']), catalogsController.getCatalogs);
router.put('/:id', roleAuth(['admin']), catalogsController.updateCatalog);
router.delete('/:id', roleAuth(['admin']), catalogsController.deleteCatalog);

module.exports = router;
