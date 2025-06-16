const express = require('express');
const router = express.Router();
const projectsController = require('../../controllers/admin/projectsController');
const roleAuth = require('../../middleware/roleAuth');

router.post('/', roleAuth(['admin']), projectsController.createProject);
router.get('/', roleAuth(['admin']), projectsController.getProjects);
router.put('/:id', roleAuth(['admin']), projectsController.updateProject);
router.delete('/:id', roleAuth(['admin']), projectsController.deleteProject);

module.exports = router;
