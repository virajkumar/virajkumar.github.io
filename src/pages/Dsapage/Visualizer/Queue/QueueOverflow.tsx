import React, { FC } from "react";
import "./QueueOverflow.css";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/AppState";

const QueueOverflow: FC = () => {
    const currQueue = useSelector((state: AppState) => (state.queue));
    if (currQueue) {
        if (currQueue.currSize == currQueue.maxSize) {
            return (
                <div id="queue-overflow">
                    QUEUE FULL
                </div>
            );
        } else {
            return (
                <div id="queue-underflow">
                </div>
            );
        }
    }
}

export default QueueOverflow;