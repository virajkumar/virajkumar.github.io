import React, { FC } from "react";
import "./PushBox.css";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/AppState";

const PushBox: FC = () => {
    const pushBox = useSelector((state: AppState) => state.pushBox);

    if (pushBox) {
        if (pushBox.empty === false) {
            return (
                <div id="pushbox-container">
                    {pushBox.value}
                </div>
            );
        } else {
            return (
                <div id="pushbox-container">
                </div>
            )
        }
    }
}

export default PushBox;