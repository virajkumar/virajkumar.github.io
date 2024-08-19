import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./TutorServiceButton.css";

const TutorServiceButton: FC = () => {
  return (
    <Link to="/tutor-service" style={{ textDecoration: "none" }}>
      <div id="tutor-service-button">Tutor Service</div>
    </Link>
  );
};

export default TutorServiceButton;
