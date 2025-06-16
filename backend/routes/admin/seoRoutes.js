const express = require('express');
const router = express.Router();
const seoController = require('../../controllers/admin/seoController');
const roleAuth = require('../../middleware/roleAuth');

router.post('/', roleAuth(['admin']), seoController.createSeo);
router.get('/', roleAuth(['admin']), seoController.getSeos);
router.put('/:id', roleAuth(['admin']), seoController.updateSeo);
router.delete('/:id', roleAuth(['admin']), seoController.deleteSeo);

module.exports = router;
