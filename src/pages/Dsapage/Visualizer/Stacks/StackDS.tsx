import React, { FC } from "react";

import PushBox from "./PushBox.tsx";
import Stack from "./Stack.tsx";
import PopBox from "./PopBox.tsx"
import Overflow from "./Overflow.tsx";
import StackEmpty from "./StackEmpty.tsx";

const StackDS: FC = () => {
    return (<div id="visualizer-container">
        <div id="visualizer-box">
            <PushBox />
            <Stack />
            <PopBox />
            <Overflow />
            <StackEmpty />
        </div>
        <p id="label">Visualizer</p>
    </div>
    );
}

export default StackDS;
