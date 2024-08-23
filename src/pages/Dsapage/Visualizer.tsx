import React, { FC } from "react";
import "./Visualizer.css";

const Visualizer: FC = () => {
  return (
    <div id="visualizer-container">
      <div id="visualizer-box"></div>
      <p id="label">Visualizer</p>
    </div>
  );
};

export default Visualizer;
