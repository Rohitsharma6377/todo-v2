const express = require('express');
const router = express.Router();
const courseController = require('../../controllers/admin/courseController');
const roleAuth = require('../../middleware/roleAuth');

router.post('/', roleAuth(['admin']), courseController.createCourse);
router.get('/', roleAuth(['admin']), courseController.getCourses);
router.put('/:id', roleAuth(['admin']), courseController.updateCourse);
router.delete('/:id', roleAuth(['admin']), courseController.deleteCourse);

module.exports = router;
