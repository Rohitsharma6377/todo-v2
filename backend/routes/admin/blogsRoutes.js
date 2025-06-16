const express = require('express');
const router = express.Router();
const blogsController = require('../../controllers/admin/blogsController');
const roleAuth = require('../../middleware/roleAuth');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../../uploads/blogs'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

router.post('/', roleAuth(['admin']), upload.single('image'), blogsController.createBlog);
router.get('/', roleAuth(['admin']), blogsController.getBlogs);
router.put('/:id', roleAuth(['admin']), upload.single('image'), blogsController.updateBlog);
router.delete('/:id', roleAuth(['admin']), blogsController.deleteBlog);

module.exports = router;
