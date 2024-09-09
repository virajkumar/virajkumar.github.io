import React, { FC } from "react";
import "./AlgorithmInterface.css";
import Input from "./Input.tsx";
import Output from "./Output.tsx";
import Example from "./Example.tsx";
import { AppState } from "../../../store/AppState.ts";
import { useDispatch, useSelector } from "react-redux";
import sortingAlgos from "./sortingAlgos.ts";
import { TypedUseSelectorHook } from "react-redux";
import { useRef, useEffect } from "react";

const AlgorithmInterface: FC = () => {
  const currDSAItem = { ...useSelector((state: AppState) => state.dsa_item) };
  const currBars = useSelector((state: AppState) => state.reducedBars);
  const dispatch = useDispatch();

  const handleClickPlay = () => {
    sortingAlgos(currDSAItem.name, dispatch, currBars);
  };

  if (
    currDSAItem.name === "insertion-sort" ||
    currDSAItem.name === "merge-sort" ||
    currDSAItem.name === "heap-sort" ||
    currDSAItem.name === "quick-sort"
  ) {
    return (
      <div id="algorithm-interface-container">
        <div id="algorithm-interface-box">
          <div id="play-button" onClick={handleClickPlay}>
            Play
          </div>
          <div id="reset-button">Reset</div>
        </div>
        <div id="label">{currDSAItem.name}</div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default AlgorithmInterface;
