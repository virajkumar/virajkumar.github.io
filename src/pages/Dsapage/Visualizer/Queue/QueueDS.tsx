import React, { FC } from "react";
import "./QueueDS.css";
import emptyQueue from "./empty-queue.jpeg";
import EnqueueBox from "./EnqueueBox.tsx";
import Queue from "./Queue.tsx";
import DequeueBox from "./DequeueBox.tsx";
import QueueOverflow from "./QueueOverflow.tsx";
import QueueEmpty from "./QueueEmpty.tsx";

import { AppState } from "../../../../store/AppState.ts";
import { useSelector } from "react-redux";

const QueueDS: FC = () => {
    const dequeueBox = useSelector((state: AppState) => state.dequeueBox);
    if (dequeueBox) {
        const styleDequeueBox = {
            //top: `${-140}px`
            top: `${-115 - (dequeueBox.height * 50)}px`
        }
        return (<div id="visualizer-container-q">
            <div id="visualizer-box-q">
                <div id="left-arrow-q"></div>
                <img id="empty-queue" src={emptyQueue} alt="not available" />
                <EnqueueBox />
                <Queue />
                <div id="right-arrow-q" style={styleDequeueBox}></div>
                <DequeueBox />
                <QueueOverflow />
                <QueueEmpty />
            </div>
            <div id="max-size-q">Max Size: 5</div>
        </div>
        );
    }
}

export default QueueDS;