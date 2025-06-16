const express = require('express');
const router = express.Router();
const accountController = require('../../controllers/admin/accountController');
const roleAuth = require('../../middleware/roleAuth');

router.post('/', roleAuth(['admin']), accountController.createAccount);
router.get('/', roleAuth(['admin']), accountController.getAccounts);
router.put('/:id', roleAuth(['admin']), accountController.updateAccount);
router.delete('/:id', roleAuth(['admin']), accountController.deleteAccount);

module.exports = router;
