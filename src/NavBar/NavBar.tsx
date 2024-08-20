import React, { FC, useState } from "react";
import "./NavBar.css";
import HomeButton from "./HomeButton.tsx";
import DsaButton from "./DsaButton.tsx";
import ProjectsButton from "./ProjectsButton.tsx";
import BlogButton from "./BlogButton.tsx";
import OpenSourceButton from "./OpenSourceButton.tsx";
import TutorServiceButton from "./TutorServiceButton.tsx";

import { useDispatch } from "react-redux";

const NavBar: FC = () => {
  return (
    <div id="bar-container">
      <div id="picture"></div>
      <div id="name"></div>
      <div id="bar">
        <div id="home" className="bar-element">
          <HomeButton />
        </div>
        <div id="dsa" className="bar-element">
          <DsaButton />
        </div>
        <div id="projects" className="bar-element">
          <ProjectsButton />
        </div>
        <div id="blog" className="bar-element">
          <BlogButton />
        </div>
        <div id="open-source" className="bar-element">
          <OpenSourceButton />
        </div>
        <div id="tutor-service" className="bar-element">
          <TutorServiceButton />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
