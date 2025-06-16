const express = require('express');
const router = express.Router();
const accountsController = require('../../controllers/admin/accountsController');
const roleAuth = require('../../middleware/roleAuth');

router.post('/', roleAuth(['admin']), accountsController.createAccount);
router.get('/', roleAuth(['admin']), accountsController.getAccounts);
router.put('/:id', roleAuth(['admin']), accountsController.updateAccount);
router.delete('/:id', roleAuth(['admin']), accountsController.deleteAccount);

module.exports = router;
