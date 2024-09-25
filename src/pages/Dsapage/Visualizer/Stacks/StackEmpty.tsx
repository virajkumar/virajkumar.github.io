import React, { FC } from "react";
import "./StackEmpty.css";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/AppState";

const StackEmpty: FC = () => {
    const currStack = useSelector((state: AppState) => (state.stack));
    if (currStack) {
        if (currStack.currSize == 0) {
            return (
                <div id="stack-empty">
                    STACK EMPTY
                </div>
            );
        } else {
            return (
                <div id="stack-not-empty">
                </div>
            );
        }
    }
}

export default StackEmpty;