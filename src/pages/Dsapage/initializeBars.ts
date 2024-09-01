import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { BAR_ORDER_TYPE, Bars, Bar } from "../../store/BarOrderReducer.ts";

const initializeBars = (): Bars | null => {
    let allBars: Bars = {bars: []};

    for (const x of Array(100).keys()) {
        allBars.bars?.push({
            id: x.toString(),
            width: "5px",
            height: `${10*x}px`,
            xPos: `${(10*x)-1000}px`,
            yPos: "200px",
            position: "relative"
        });
      }
    return allBars;
}

export default initializeBars;