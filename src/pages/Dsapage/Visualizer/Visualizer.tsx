import React, { FC } from "react";
import "./Visualizer.css";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/AppState";
import Sorting from "./Sorting.tsx";
import { Bars, BAR_ORDER_TYPE } from "../../../store/BarOrderReducer.ts";
import initializeBars from "../initializeBars.ts";

const Visualizer: FC = () => {
  const currDSAItem = useSelector((state: AppState) => state.dsa_item?.name);
  //console.log(currDSAItem);
  // const initialBars: Bars | null = initializeBars();
  // const dispatch = useDispatch();

  // dispatch({
  //   type: BAR_ORDER_TYPE,
  //   payload: {
  //     bars: initialBars?.bars,
  //     flagShuffle: initialBars?.flagShuffle,
  //   },
  // });

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
