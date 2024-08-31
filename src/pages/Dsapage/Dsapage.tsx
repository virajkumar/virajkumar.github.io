import React, { FC } from "react";
import NavBar from "../../NavBar/NavBar.tsx";
import AlgorithmMenu from "./AlgorithmMenu.tsx";
import AlgorithmIO from "./AlgorithmIO/AlgorithmIO.tsx";
import Visualizer from "./Visualizer/Visualizer.tsx";
import Explainer from "./Explainer.tsx";
import { useDispatch } from "react-redux";
import "./Dsapage.css";
import initializeBars from "./initializeBars.ts";
import { Bar, Bars, BAR_ORDER_TYPE } from "../../store/BarOrderReducer.ts";

const Dsapage: FC = () => {
  const dispatch = useDispatch();

  const initialBars: Bars | null = initializeBars();

  dispatch({
    type: BAR_ORDER_TYPE,
    payload: {
      bars: initialBars,
    },
  });

  return (
    <div id="dsa-container">
      <NavBar />
      <AlgorithmMenu />
      <AlgorithmIO />
      <Visualizer />
      <Explainer />
    </div>
  );
};
export default Dsapage;
