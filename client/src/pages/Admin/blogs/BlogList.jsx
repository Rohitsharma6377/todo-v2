import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../../features/admin/blogs/blogsSlice';

const BlogList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div>
      <h2>All Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
