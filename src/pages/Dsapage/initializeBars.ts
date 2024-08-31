import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { BAR_ORDER_TYPE, Bars, Bar } from "../../store/BarOrderReducer.ts";

const initializeBars = (): Bars | null => {
    let allBars: Bars = {bars: []};

    for (const x of Array(100).keys()) {
        allBars.bars?.push({
            id: x
        });;
      }

    return allBars;
}

export default initializeBars;