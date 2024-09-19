import React, { FC } from "react";
import Bars from "./Bars.tsx";
import "./Sorting.css";

const Sorting: FC = () => {
  return (
    <div id="visualizer-container">
      <div id="visualizer-box">
        <div id="x-axis"></div>
        <div id="x-axis-label">Index</div>
        <div id="sorting-container">
          <Bars />
        </div>
        <div id="y-axis"></div>
        <div id="y-axis-label">Size</div>
      </div>
      <p id="label">Visualizer</p>
    </div>
  );
};

export default Sorting;
