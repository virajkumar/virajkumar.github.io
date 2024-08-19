import React, { FC } from "react";
import "./Home.css";
import NavBar from "../../NavBar/NavBar.tsx";
import Description from "./Description.tsx";
import Resume from "./Resume.tsx";
import Footer from "./Footer.tsx";

const Home: FC = () => {
  return (
    <div id="home-container">
      <NavBar />
      <Description />
      <Resume />
      <Footer />
    </div>
  );
};
export default Home;
