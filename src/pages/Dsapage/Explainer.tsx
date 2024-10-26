import React, { FC } from "react";
import { AppState } from "../../store/AppState";
import { useSelector } from "react-redux";
import "./Explainer.css";

const Explainer: FC = () => {
  const currDSAItem = useSelector((state: AppState) => state.dsa_item?.name);
  if (
    currDSAItem === "insertion-sort" ||
    currDSAItem === "merge-sort" ||
    currDSAItem === "heap-sort" ||
    currDSAItem === "quick-sort"
  ) {
    return (
      <p className="description">
        Insertion Sort

        •	Description: A simple sorting algorithm that builds the sorted list one item at a time by comparing each new element to elements in the already sorted section and inserting it in the correct position.
        •	Complexity: O(n²) in average and worst cases; O(n) in the best case for nearly sorted data.
        •	Advantages: Easy to implement, efficient for small or nearly sorted lists, in-place, and stable.
        •	Use Case: Small datasets or nearly sorted data.

        Merge Sort

        •	Description: A divide-and-conquer algorithm that splits the list into halves, sorts each half recursively, and then merges the sorted halves back together.
        •	Complexity: O(n log n) for all cases.
        •	Advantages: Stable, very efficient for large datasets, and sorts in predictable time.
        •	Use Case: Large datasets, especially when stability is required.

        Heap Sort

        •	Description: An efficient comparison-based algorithm that uses a binary heap data structure to sort elements. It builds a max heap from the data, then repeatedly extracts the largest element to build a sorted list.
        •	Complexity: O(n log n) in all cases.
        •	Advantages: In-place and doesn’t require extra memory.
        •	Use Case: When in-place sorting with O(n log n) complexity is desired.

        Quick Sort

        •	Description: A divide-and-conquer algorithm that selects a pivot element, partitions the array around the pivot, and then recursively sorts the partitions.
        •	Complexity: Average O(n log n); worst-case O(n²), but can be mitigated with good pivot selection.
        •	Advantages: Very fast in practice, in-place, and widely used.
        •	Use Case: Large datasets when an in-place, fast sort is preferred.
      </p>
    );
  } else if (currDSAItem === "stack-ds") {
    return (
      <p className="description">
        A Stack is a linear data structure that follows the Last In, First Out (LIFO) principle. This means the last element added to the stack is the first one to be removed.

        Key Operations

        1.	Push: Adds an element to the top of the stack.
        2.	Pop: Removes the top element from the stack.
        3.	Peek/Top: Returns the top element without removing it.
        4.	isEmpty: Checks if the stack is empty.

        Characteristics

        •	LIFO Order: The most recent element added is accessed first.
        •	Restricted Access: Elements can only be added or removed from the top of the stack.

        Applications

        •	Function Call Management: Used by compilers to handle function calls and recursion.
        •	Expression Evaluation: Supports evaluating expressions in compilers and calculators.
        •	Undo Mechanisms: Enables backtracking features in applications.

        Implementation

        Stacks can be implemented using arrays or linked lists, depending on whether a fixed or dynamic size is needed.

        Complexity

        •	Push and Pop Operations: O(1), as they only involve adding or removing an element from the top.

        Stacks are simple but essential in programming, particularly for managing tasks where last-in, first-out order is required.
      </p>
    );
  } else if (currDSAItem === "queue-ds") {
    return (
      <p className="description">
        A Queue is a linear data structure that follows the First In, First Out (FIFO) principle. This means the first element added to the queue is the first one to be removed.

        Key Operations

        1.	Enqueue: Adds an element to the back (or rear) of the queue.
        2.	Dequeue: Removes an element from the front of the queue.
        3.	Front/Peek: Returns the front element without removing it.
        4.	isEmpty: Checks if the queue is empty.

        Characteristics

        •	FIFO Order: Elements are processed in the order they are added.
        •	Restricted Access: Elements can only be added at the rear and removed from the front.

        Applications

        •	Task Scheduling: Used in operating systems to manage tasks or processes.
        •	Data Buffers: Common in applications requiring a temporary storage of data, such as printing queues or network buffers.
        •	Breadth-First Search (BFS): Essential in graph and tree traversals.

        Implementation

        Queues can be implemented using arrays, linked lists, or circular arrays for efficient use of space.

        Complexity

        •	Enqueue and Dequeue Operations: O(1), since they only involve adding or removing elements from fixed positions.

        Queues are essential in scenarios where data needs to be processed in the order it arrives.
      </p>
    )
  } else if (currDSAItem === "longest-common-subsequence-dp") {
    return (
      <p className="description">
        Dynamic Programming (DP) is an effective approach to solve the Longest Common Subsequence (LCS) problem by breaking it down into overlapping subproblems and using previously computed results to avoid redundant work.

        Problem Overview

        The LCS problem aims to find the longest subsequence common to two given sequences (strings), where the subsequence is formed by deleting some elements without reordering the remaining ones.

        Approach with Dynamic Programming

        1.	Define a DP Table: Create a 2D table dp where dp[i][j] represents the length of the LCS for the first i characters of the first sequence and the first j characters of the second sequence.
        2.	Recurrence Relation:
        •	If characters at positions i-1 in the first string and j-1 in the second string match, then dp[i][j] = dp[i-1][j-1] + 1.
        •	If they do not match, then dp[i][j] = max(dp[i-1][j], dp[i][j-1]).
        3.	Fill the DP Table: Initialize the table with zeros and use the recurrence relation to fill it, iterating through each position.
        4.	Result: The value at dp[m][n] (where m and n are the lengths of the sequences) will hold the length of the LCS.

        Complexity

        •	Time Complexity: O(m * n), where m and n are the lengths of the two sequences.
        •	Space Complexity: O(m * n), though it can be optimized to O(min(m, n)) with further improvements.

        Advantages

        Dynamic programming makes solving the LCS problem efficient, even for moderately large sequences, by avoiding redundant calculations and reducing exponential complexity to polynomial time.
      </p>
    )
  } else if (
    currDSAItem === "bfs-graphs" ||
    currDSAItem === "dfs-graphs" ||
    currDSAItem === "kruskals-algorithm-graphs"
  ) {
    return (
      <p className="description">
        Breadth-First Search (BFS)

        •	Description: BFS is a graph traversal algorithm that explores vertices layer by layer, starting from a given source vertex, then visiting all its neighbors before moving on to the next level.
        •	Procedure: It uses a queue to maintain the order of exploration. Beginning with the source node, BFS adds each unvisited neighbor to the queue and processes them in FIFO order.
        •	Applications: Shortest path in unweighted graphs, finding connected components, and level-order traversal in trees.
        •	Complexity: O(V + E), where V is the number of vertices and E is the number of edges.

        Depth-First Search (DFS)

        •	Description: DFS explores as far as possible along each branch before backtracking. Starting from a source vertex, DFS recursively explores each unvisited adjacent vertex.
        •	Procedure: Implemented using recursion (implicitly with a call stack) or an explicit stack to explore paths deeply before switching branches.
        •	Applications: Cycle detection, pathfinding, topological sorting in directed acyclic graphs (DAGs), and finding connected components.
        •	Complexity: O(V + E), where V is the number of vertices and E is the number of edges.

        Kruskal’s Algorithm (for Minimum Spanning Tree)

        •	Description: Kruskal’s algorithm is a greedy method to find the Minimum Spanning Tree (MST) of a weighted, connected graph, which connects all vertices with the minimum possible total edge weight.
        •	Procedure: Sort all edges by weight, then add the smallest edge that does not form a cycle with already included edges, using the Union-Find structure to manage cycles. Repeat until the MST contains V - 1 edges (for V vertices).
        •	Applications: Network design (e.g., building efficient telecommunications, electrical grids), optimizing road/rail networks.
        •	Complexity: O(E log E), primarily due to edge sorting and union-find operations, where E is the number of edges.

        Each algorithm serves a distinct purpose in graph theory, offering efficient solutions to various traversal and optimization problems.
      </p>
    );
  }
};

export default Explainer;
