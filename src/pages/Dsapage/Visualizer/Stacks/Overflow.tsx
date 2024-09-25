import React, { FC } from "react";
import "./Overflow.css";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/AppState";

const Overflow: FC = () => {
    const currStack = useSelector((state: AppState) => (state.stack));
    if (currStack) {
        if (currStack.currSize == currStack.maxSize) {
            return (
                <div id="stack-overflow">
                    STACK OVERFLOW
                </div>
            );
        } else {
            return (
                <div id="stack-underflow">
                </div>
            );
        }
    }
}

export default Overflow;