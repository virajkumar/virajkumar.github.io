import React, { FC } from "react";
import "./AlgorithmInterface.css";
import { AppState } from "../../../store/AppState.ts";
import { useSelector } from "react-redux";
import SortingUI from "./SortingUI.tsx";
import StackUI from "./StackUI.tsx";
import QueueUI from "./QueueUI.tsx";
import DPUI from "./DPUI.tsx";
import GraphsUI from "./GraphsUI.tsx";

const AlgorithmInterface: FC = () => {
  const currDSAItem = useSelector((state: AppState) => state.dsa_item?.name);
  if (
    currDSAItem === "insertion-sort" ||
    currDSAItem === "merge-sort" ||
    currDSAItem === "heap-sort" ||
    currDSAItem === "quick-sort"
  ) {
    return (
      <SortingUI />
    );
  } else if (currDSAItem === "stack-ds") {
    return (
      <StackUI />
    );
  } else if (currDSAItem === "queue-ds") {
    return (
      <QueueUI />
    );
  } else if (currDSAItem === "longest-common-subsequence-dp") {
    return (
      <DPUI />
    );
  } else if (
    currDSAItem === "bfs-graphs" ||
    currDSAItem === "dfs-graphs" ||
    currDSAItem === "topological-sort-graphs" ||
    currDSAItem === "kruskals-algorithm-graphs" ||
    currDSAItem === "prims-algorithm-graphs" ||
    currDSAItem === "bellman-ford-algorithm-graphs" ||
    currDSAItem === "floyd-warshall-algorithm-graphs"
  ) {
    return (
      <GraphsUI />
    );
  }
};

export default AlgorithmInterface;
