import React, { FC } from "react";
import "./AlgorithmMenu.css";
import { useDispatch } from "react-redux";
import { DSA_ITEM_TYPE, DSAItem } from "../../store/DSAItemReducer.ts";

const AlgorithmMenu: FC = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const newDSAItem = event.target.value;

    dispatch({
      type: DSA_ITEM_TYPE,
      payload: {
        name: newDSAItem,
      },
    });
  };

  return (
    <div id="algorithm-menu-container">
      <label htmlFor="algorithms"> Choose algorithm: </label>
      <select
        name="algorithms"
        id="algorithms"
        onChange={handleChange}
      >
        <option value="insertion-sort">Insertion Sort</option>
        <option value="merge-sort">Merge Sort</option>
        <option value="heap-sort">Heap Sort</option>
        <option value="quick-sort">Quick Sort</option>
        <option value="stack-ds">Stack Data Structure</option>
        <option value="queue-ds">Queue Data Structure</option>
        <option value="longest-common-subsequence-dp">
          Longest Common Subsequence (Dynamic Programming)
        </option>
        <option value="bfs-graphs">Breadth First Search (Graphs)</option>
        <option value="dfs-graphs">Depth First Search (Graphs)</option>
        <option value="kruskals-algorithm-graphs">Kruskal's Algorithm - Minimum Spanning Tree (Graphs)</option>
      </select>
    </div>
  );
};

export default AlgorithmMenu;
