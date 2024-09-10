import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { BAR_ORDER_TYPE, Bars, Bar } from "../../store/BarOrderReducer.ts";
import { shuffle } from "./shuffleBars.ts";

const initializeBars = (): Bars | null => {
    let allBars: Bars = {bars: [], flagShuffle: true};

    for (const x of Array(48).keys()) {
        allBars.bars?.push({
            id: x.toString(),
            width: "10px",
            height: `${10*x}px`,
            left: `${(1*x)}px`,
            top: `${50 + (480-(10*x))}px`,
            position: "relative",
            backgroundColor: "blue"
        });
    }
    shuffle(allBars.bars);
    for (const i of Array(48).keys()) {
        allBars.bars[i].left = `${i}px`;
    }
    return allBars;
}

export default initializeBars;