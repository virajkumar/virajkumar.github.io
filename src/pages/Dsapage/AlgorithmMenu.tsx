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
        defaultValue="insertion-sort"
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
        <option value="huffman-code-ga">
          Huffman Code (Greedy Algorithms)
        </option>
        <option value="bfs-graphs">Breadth First Search (Graphs)</option>
        <option value="dfs-graphs">Depth First Search (Graphs)</option>
        <option value="topological-sort-graphs">
          Topological Sort (Graphs)
        </option>
        <option value="kruskals-algorithm-graphs">Kruskal's Algorithm (Graphs)</option>
        <option value="prims-algorithm-graphs">Prim's Algorithm (Graphs)</option>
        <option value="bellman-ford-algorithm-graphs">
          Bellman Ford Algorithm (Graphs)
        </option>
        <option value="floyd-warshall-algorithm-graphs">
          Floyd Warshall Algorithm (Graphs)
        </option>
      </select>
    </div>
  );
};

export default AlgorithmMenu;
