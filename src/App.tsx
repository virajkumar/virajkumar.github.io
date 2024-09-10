import React from "react";
import "./App.css";

import Home from "./pages/Home/Home.tsx";
import Projects from "./pages/Projects/Projects.tsx";
import Blog from "./pages/Blog/Blog.tsx";
import Opensource from "./pages/Opensource/Opensource.tsx";
import Tutoring from "./pages/Dsapage/Dsapage.tsx";
import Dsapage from "./pages/Dsapage/Dsapage.tsx";

import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router";
import { DSA_ITEM_TYPE } from "./store/DSAItemReducer.ts";
import { AppState } from "./store/AppState.ts";
import { Bars, BAR_ORDER_TYPE } from "./store/BarOrderReducer.ts";
import initializeBars from "./pages/Dsapage/initializeBars.ts";

function App() {
  const dispatch = useDispatch();

  const currBars = useSelector((state: AppState) => state.reducedBars);

  // console.log(currBars);
  // console.log(10);

  if (!currBars) {
    dispatch({
      type: DSA_ITEM_TYPE,
      payload: {
        name: "Insertion Sort",
      },
    });

    const initialBars: Bars | null = initializeBars();

    dispatch({
      type: BAR_ORDER_TYPE,
      payload: {
        bars: initialBars?.bars,
        flagShuffle: initialBars?.flagShuffle,
      },
    });
  }

  return (
    <div id="temp">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dsa" element={<Dsapage />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/open-source" element={<Opensource />}></Route>
        <Route path="/tutor-services" element={<Tutoring />}></Route>
      </Routes>
    </div>
  );
}

export default App;
