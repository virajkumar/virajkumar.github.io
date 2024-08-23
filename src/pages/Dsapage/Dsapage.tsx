import React, { FC } from "react";
import NavBar from "../../NavBar/NavBar.tsx";
import AlgorithmMenu from "./AlgorithmMenu.tsx";
import AlgorithmIO from "./AlgorithmIO/AlgorithmIO.tsx";
import Visualizer from "./Visualizer.tsx";
import Explainer from "./Explainer.tsx";

import "./Dsapage.css";

const Dsapage: FC = () => {
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
