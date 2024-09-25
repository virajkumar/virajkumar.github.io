import React, { FC } from "react";
import "./QueueEmpty.css";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/AppState";

const QueueEmpty: FC = () => {
    const currQueue = useSelector((state: AppState) => (state.queue));
    if (currQueue) {
        if (currQueue.currSize == 0) {
            return (
                <div id="queue-empty">
                    QUEUE EMPTY
                </div>
            );
        } else {
            return (
                <div id="queue-not-empty">
                </div>
            );
        }
    }
}

export default QueueEmpty;