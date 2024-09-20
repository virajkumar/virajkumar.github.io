import React, { FC } from "react";
import "./PopBox.css";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/AppState";
import { CSSProperties } from "react";

const PopBox: FC = () => {
    const popBox = useSelector((state: AppState) => state.popBox);

    if (popBox) {
        const stylePopBox = {
            top: `${-550 - (popBox.height * 50)}px`
        }
        if (popBox.empty === false) {
            return (
                <div id="popbox-container" style={stylePopBox}>
                    {popBox.value}
                </div>
            );
        } else {
            return (
                <div id="popbox-container" style={stylePopBox}>
                </div>
            )
        }
    }
}

export default PopBox;