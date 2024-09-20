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
import { ResetFlag, RESET_FLAG_TYPE } from "./store/ResetFlagReducer.ts";
import { PUSH_BOX_TYPE } from "./store/PushBoxValReducer.ts";
import { POP_BOX_TYPE } from "./store/PopBoxReducer.ts";
import { Stack, STACK_TYPE } from "./store/StackReducer.ts";
import { PUSH_POP_TYPE } from "./store/PushOrPopReducer.ts";

function App() {
  const dispatch = useDispatch();

  const currBars = useSelector((state: AppState) => state.reducedBars);

  // console.log(currBars);
  // console.log(10);

  if (!currBars) {
    dispatch({
      type: RESET_FLAG_TYPE,
      payload: {
        flag: false,
      },
    });

    dispatch({
      type: DSA_ITEM_TYPE,
      payload: {
        name: "insertion-sort",
      },
    });

    const initialBars: Bars | null = initializeBars();

    dispatch({
      type: STACK_TYPE,
      payload: {
        stack: [],
        currSize: 0,
        maxSize: 5
      }
    });

    //       {
    //         id: 0,
    //         alphabet: "B",
    //         left: "270px",
    //         top: "-70px",
    //         position: "relative",
    //         backgroundColor: "green"
    //       }
    //     ],
    //     currSize: 1,
    //     maxSize: 5
    //   }
    // });

    dispatch({
      type: BAR_ORDER_TYPE,
      payload: {
        bars: initialBars?.bars,
        flagShuffle: initialBars?.flagShuffle,
      },
    });

    dispatch({
      type: PUSH_BOX_TYPE,
      payload: {
        empty: false,
        value: 'A'
      }
    });

    dispatch({
      type: POP_BOX_TYPE,
      payload: {
        empty: true,
        value: '',
        height: 0
      }
    });

    dispatch({
      type: PUSH_POP_TYPE,
      payload: {
        push: false,
        pop: false
      }
    })
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
