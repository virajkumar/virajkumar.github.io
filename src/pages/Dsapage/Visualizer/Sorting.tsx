import React, { FC } from "react";
import "./Visualizer.css";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/AppState";
import { DSAItem } from "../../../store/DSAItemReducer";
import Bars from "./Bars.tsx";
import PlayButton from "./PlayButton.tsx";
import RandomizeButton from "./RandomizeButton.tsx";
import "./Sorting.css";

const Sorting: FC = () => {
  return (
    <div id="sorting-container">
      <Bars />
      <PlayButton />
      <RandomizeButton />
    </div>
  );
};

export default Sorting;
