import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./ProjectsButton.css";

const ProjectsButton: FC = () => {
  return (
    <Link to="/projects" style={{ textDecoration: "none" }}>
      <div id="projects-button">Projects</div>
    </Link>
  );
};

export default ProjectsButton;
