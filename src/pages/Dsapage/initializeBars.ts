import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { BAR_ORDER_TYPE, Bars, Bar } from "../../store/BarOrderReducer.ts";

const initializeBars = (): Bars | null => {
    let allBars: Bars = {bars: []};

    for (const x of Array(35).keys()) {
        allBars.bars?.push({
            id: x.toString(),
            width: "10px",
            height: `${10*x}px`,
            left: `${(1*x)-150}px`,
            top: "10px",
            position: "relative"
        });
      }
    return allBars;
}

export default initializeBars;