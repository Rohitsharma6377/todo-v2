const express = require('express');
const router = express.Router();
const paymentsController = require('../../controllers/admin/paymentsController');
const roleAuth = require('../../middleware/roleAuth');

router.post('/', roleAuth(['admin']), paymentsController.createPayment);
router.get('/', roleAuth(['admin']), paymentsController.getPayments);
router.put('/:id', roleAuth(['admin']), paymentsController.updatePayment);
router.delete('/:id', roleAuth(['admin']), paymentsController.deletePayment);

module.exports = router;
