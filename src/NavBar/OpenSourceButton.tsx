import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./OpenSourceButton.css";

const OpenSourceButton: FC = () => {
  return (
    <Link to="/open-source" style={{ textDecoration: "none" }}>
      <div id="open-source-button">Open Source</div>
    </Link>
  );
};

export default OpenSourceButton;
