const express = require('express');
const router = express.Router();
const emailsController = require('../../controllers/admin/emailsController');
const roleAuth = require('../../middleware/roleAuth');

router.post('/', roleAuth(['admin']), emailsController.createEmail);
router.get('/', roleAuth(['admin']), emailsController.getEmails);
router.put('/:id', roleAuth(['admin']), emailsController.updateEmail);
router.delete('/:id', roleAuth(['admin']), emailsController.deleteEmail);

module.exports = router;
