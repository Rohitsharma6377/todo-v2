const express = require('express');
const router = express.Router();
const careerController = require('../../controllers/admin/careerController');
const roleAuth = require('../../middleware/roleAuth');

router.post('/', roleAuth(['admin']), careerController.createCareer);
router.get('/', roleAuth(['admin']), careerController.getCareers);
router.put('/:id', roleAuth(['admin']), careerController.updateCareer);
router.delete('/:id', roleAuth(['admin']), careerController.deleteCareer);

module.exports = router;
