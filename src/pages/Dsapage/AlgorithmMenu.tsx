import React, { FC } from "react";
import "./AlgorithmMenu.css";

const AlgorithmMenu: FC = () => {
  return (
    <div id="algorithm-menu-container">
      <label htmlFor="algorithms"> Choose algorithm: </label>
      <select name="algorithms" id="algorithms">
        <option value="insertion-sort">Insertion Sort</option>
        <option value="merge-sort">Merge Sort</option>
        <option value="heap-sort">Heap Sort</option>
        <option value="quick-sort">Quick Sort</option>
        <option value="stack-ds">Stack Data Structure</option>
        <option value="queue-ds">Queue Data Structure</option>
        <option value="linked-list-ds">Linked List Data Structure</option>
        <option value="hash-table-ds">Hash Table Data Sturcture</option>
        <option value="binary-search-tree-ds">Binary Search Tree</option>
        <option value="rod-cutting-dp">
          Rod Cutting (Dynamic Programming)
        </option>
        <option value="matrix-chain-multiplication-dp">
          Matrix Chain Multiplication (Dynamic Programming)
        </option>
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
        <option value="kruskal-algorithm">Kruskal's Algorithm (Graphs)</option>
        <option value="prim-algorithm">Prim's Algorithm (Graphs)</option>
        <option value="bellman-ford-algorithm">
          Bellman Ford Algorithm (Graphs)
        </option>
        <option value="floyd-warshall-algorithm">
          Floyd Warshall Algorithm (Graphs)
        </option>
      </select>
    </div>
  );
};

export default AlgorithmMenu;
