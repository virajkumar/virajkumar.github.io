import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./HomeButton.css";

const HomeButton: FC = () => {
    return (<Link to="/" style={{ textDecoration: 'none'}}>
    <div id="homepage-button">Home</div>
    </Link>
    )
};

export default HomeButton;