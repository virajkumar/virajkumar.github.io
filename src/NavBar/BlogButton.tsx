import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./BlogButton.css";

const BlogButton: FC = () => {
  return (
    <Link to="/blog" style={{ textDecoration: "none" }}>
      <div id="blog-button">Blog</div>
    </Link>
  );
};

export default BlogButton;
