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
  const currDSAItem = useSelector((state: AppState) => state.dsa_item?.name);
  const currBars = useSelector((state: AppState) => state.reducedBars);
  const dispatch = useDispatch();
  const currBarsRef = useRef(currBars);
  useEffect(() => {
    currBarsRef.current = currBars;
  }, [currBars]);

  const handleClickPlay = () => {
    sortingAlgos(currDSAItem, dispatch, currBarsRef.current);
  };

  if (
    currDSAItem === "insertion-sort" ||
    currDSAItem === "merge-sort" ||
    currDSAItem === "heap-sort" ||
    currDSAItem === "quick-sort"
  ) {
    return (
      <div id="algorithm-interface-container">
        <div id="algorithm-interface-box">
          <div id="play-button" onClick={handleClickPlay}>
            Play
          </div>
          <div id="reset-button">Reset</div>
        </div>
        <div id="label">{currDSAItem}</div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default AlgorithmInterface;
