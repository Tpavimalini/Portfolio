import React from 'react';
import './Blog.css';

function Blog() {
  const blogs = [
    { title: 'Understanding React Hooks', link: '#' },
    { title: 'Getting Started with Power BI', link: '#' },
    // Add more blogs here
  ];

  return (
    <div className="blog-container">
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <a href={blog.link} target="_blank" rel="noopener noreferrer">{blog.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
