import React, { FC } from "react";
import "./Visualizer.css";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/AppState";
import Sorting from "./Sorting/Sorting.tsx";
import StackDS from "./Stacks/StackDS.tsx";

const Visualizer: FC = () => {
  const currDSAItem = useSelector((state: AppState) => state.dsa_item?.name);
  if (
    currDSAItem === "insertion-sort" ||
    currDSAItem === "merge-sort" ||
    currDSAItem === "heap-sort" ||
    currDSAItem === "quick-sort"
  ) {
    return (
      <Sorting />
    );
  } else if (currDSAItem === "stack-ds") {
    return (
      <StackDS />
    );
  }
};

export default Visualizer;
