import React, { FC } from "react";
import "./Home.css";
import NavBar from "../../NavBar/NavBar.tsx";
import Description from "./Description.tsx";
import Resume from "./Resume.tsx";
import Footer from "./Footer.tsx";

const Home: FC = () => {
  return (
    <div id="home-container">
      <div id="nav-container">
        <NavBar />
      </div>
      <div id="description-resume-container">
        <Description />
        <Resume />
      </div>
      <div id="footer-container">
        <Footer />
      </div>
    </div>
  );
};
export default Home;
