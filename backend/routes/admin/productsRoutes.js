const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/admin/productsController');
const roleAuth = require('../../middleware/roleAuth');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../../uploads/products'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

router.post('/', roleAuth(['admin']), upload.single('image'), productsController.createProduct);
router.get('/', roleAuth(['admin']), productsController.getProducts);
router.put('/:id', roleAuth(['admin']), upload.single('image'), productsController.updateProduct);
router.delete('/:id', roleAuth(['admin']), productsController.deleteProduct);

// Stripe checkout session
router.post('/checkout', productsController.createCheckoutSession);

module.exports = router;
