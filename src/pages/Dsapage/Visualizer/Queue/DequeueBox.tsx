import React, { FC } from "react";
import "./DequeueBox.css";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/AppState";
import { CSSProperties } from "react";

const DequeueBox: FC = () => {
    const dequeueBox = useSelector((state: AppState) => state.dequeueBox);

    if (dequeueBox) {
        const styleDequeueBox = {
            top: `${-215 - (dequeueBox.height * 50)}px`
        }
        if (dequeueBox.empty === false) {
            return (
                <div id="dequeuebox-container" style={styleDequeueBox}>
                    {dequeueBox.value}
                </div>
            );
        } else {
            return (
                <div id="dequeuebox-container" style={styleDequeueBox}>
                </div>
            )
        }
    }
}

export default DequeueBox;