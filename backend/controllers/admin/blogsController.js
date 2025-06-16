const Blog = require('../../models/admin/blogs');

exports.createBlog = async (req, res) => {
  try {
    const { title, content, status } = req.body;
    const image = req.file ? req.file.filename : null;
    const blog = new Blog({ title, content, status, image });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { title, content, status } = req.body;
    const update = { title, content, status };
    if (req.file) update.image = req.file.filename;
    const blog = await Blog.findByIdAndUpdate(req.params.id, update, { new: true });
    res.json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
