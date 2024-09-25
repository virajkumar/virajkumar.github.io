import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./DsaButton.css";

const DsaButton: FC = () => {
  return (
    <Link to="/dsa" style={{ textDecoration: "none" }}>
      <div id="dsa-button">Data Structures and Algorithms</div>
    </Link>
  );
};

export default DsaButton;
