import React, { FC } from "react";
import { AppState } from "../../../store/AppState.ts";
import { useDispatch, useSelector } from "react-redux";

const StackUI: FC = () => {
    const handleClickPush = (event) => {

    }

    return (
        <div id="algorithm-interface-container">
            <form id="algorithm-interface-form">
                <label htmlFor="push">Enter alphabet to push:</label>
                <input type="text" name="push" id="push" />
                <input type="button" onClick={handleClickPush} />
            </form>
        </div>
    );
}

export default StackUI;
