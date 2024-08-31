import React, { FC } from "react";
import "./Visualizer.css";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/AppState";

const Bars: FC = () => {
  const currBars = useSelector((state: AppState) => state.bars?.bars);
  const barsHTML: string[] = [];

  if (currBars) {
    for (const bar of currBars) {
      barsHTML.push(`<div className=\"bar-element\" id=\"${bar.id}\"></div>`);
    }
  }
  return <div></div>;
};

export default Bars;
