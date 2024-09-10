import React, { FC } from "react";
import NavBar from "../../NavBar/NavBar.tsx";
import AlgorithmMenu from "./AlgorithmMenu.tsx";
import Visualizer from "./Visualizer/Visualizer.tsx";
import Explainer from "./Explainer.tsx";
import { useDispatch } from "react-redux";
import "./Dsapage.css";
import initializeBars from "./initializeBars.ts";
import { Bar, Bars, BAR_ORDER_TYPE } from "../../store/BarOrderReducer.ts";
import AlgorithmInterface from "./AlgorithmInterface/AlgorithmInterface.tsx";

const Dsapage: FC = () => {
  return (
    <div id="dsa-container">
      <NavBar />
      <AlgorithmMenu />
      <AlgorithmInterface />
      <Visualizer />
      <Explainer />
    </div>
  );
};
export default Dsapage;
