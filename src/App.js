import logo from './logo.svg';
import './App.css';

// import Home from "./pages/Home/Home.js";
// import Projects from "./pages/Projects/Projects.js";
// import Blog from "./pages/Blog/Blog.js";
// import Opensource from "./pages/Opensource/Opensource.js";
// import Tutoring from "./pages/Dsapage/Dsapage.js";
// import Dsapage from "./pages/Dsapage/Dsapage.js";

import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <p>Newpage</p>
      </header>
    </div>
  );
}

export default App;
