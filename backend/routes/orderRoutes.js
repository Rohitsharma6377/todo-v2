const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const roleAuth = require('../middleware/roleAuth');

router.post('/', orderController.createOrder);
router.get('/my', orderController.getUserOrders);
router.get('/admin', roleAuth(['admin']), orderController.getAllOrders);
router.put('/:id/status', roleAuth(['admin']), orderController.updateOrderStatus);

module.exports = router;
