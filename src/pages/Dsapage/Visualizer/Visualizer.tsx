import React, { FC } from "react";
import "./Visualizer.css";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/AppState";
import Sorting from "./Sorting.tsx";

const Visualizer: FC = () => {
  const currDSAItem = useSelector((state: AppState) => state.dsa_item?.name);
  //console.log(currDSAItem);
  if (
    currDSAItem === "insertion-sort" ||
    currDSAItem === "merge-sort" ||
    currDSAItem === "heap-sort" ||
    currDSAItem === "quick-sort"
  ) {
    return (
      <div id="visualizer-container">
        <div id="visualizer-box">
          <div id="x-axis"></div>
          <div id="x-axis-label">Index</div>
          <Sorting />
          <div id="y-axis"></div>
          <div id="y-axis-label">Size</div>
        </div>
        <p id="label">Visualizer</p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Visualizer;
