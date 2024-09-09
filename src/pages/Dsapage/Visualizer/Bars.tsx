import React, { FC, CSSProperties } from "react";
import "./Visualizer.css";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../store/AppState";
import "./Bars.css";
import { shuffle } from "./shuffleBars.ts";
import { BAR_ORDER_TYPE } from "../../../store/BarOrderReducer.ts";

const Bars: FC = () => {
  const currBars = useSelector((state: AppState) => state.reducedBars);
  const dispatch = useDispatch();
  // if (currBars) {
  //   console.log(currBars["bars"]);
  // }
  // const barsHTML = [];

  // let arrayLength;
  // if (currBars) {
  //   arrayLength = currBars["bars"].length;
  // }

  // if (arrayLength && currBars) {
  //   for (let i = 0; i < arrayLength; i++) {
  //     barsHTML.push(
  //       <div className="bar-element" id={currBars["bars"][i].id}></div>
  //     );
  //   }
  // }

  if (currBars) {
    const barStyles: CSSProperties[] = [];

    for (const i of Array(48).keys()) {
      const bs = {
        id: currBars.bars[i].id,
        minWidth: currBars.bars[i].width,
        maxWidth: currBars.bars[i].width,
        minHeight: currBars.bars[i].height,
        maxHeight: currBars.bars[i].height,
        left: currBars.bars[i].left,
        top: currBars.bars[i].top,
        position: currBars.bars[i].position,
        display: "flex",
        flex: "1",
        backgroundColor: currBars.bars[i].backgroundColor,
        justifyContent: "center",
      } as React.CSSProperties;

      barStyles.push(bs);
    }

    console.log(currBars.flagShuffle);

    if (currBars.flagShuffle) {
      console.log("hello");
      shuffle(barStyles);
      // dispatch({
      //   type: BAR_ORDER_TYPE,
      //   payload: currBars,
      // });
    }

    for (const i of Array(48).keys()) {
      barStyles[i].left = `${i}px`;
    }

    return (
      <div id="bars-container">
        {currBars.bars.map((div) => (
          <div className="bar-item" style={barStyles[div.id]}></div>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Bars;
