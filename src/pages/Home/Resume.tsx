import React, { FC } from "react";
import "./Resume.css";

const resume_pic = require("./Resume.png");

const Resume: FC = () => {
  return (
    <div id="resume-container">
      <img id="resume-image" src={String(resume_pic)} alt="not available" />
    </div>
  );
};
export default Resume;
