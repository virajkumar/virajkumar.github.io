import React, { FC } from "react";
import { useSelector } from "react-redux";
import "./Stack.css";
import { AppState } from "../../../../store/AppState";
import { CSSProperties } from "react";

const Stack: FC = () => {
    const currStack = useSelector((state: AppState) => { return state.stack });

    if (currStack) {
        let stackStyles: CSSProperties[] = [];
        let indexNums: number[] = [];

        for (const i of Array(currStack.currSize).keys()) {
            indexNums.push(0);
            indexNums[i] = parseInt(currStack.stack[i].id);
        }

        for (const i of indexNums) {
            const bs = {
                minWidth: "50px",
                maxWidth: "50px",
                minHeight: "50px",
                maxHeight: "50px",
                left: currStack.stack[i].left,
                top: currStack.stack[i].top,
                position: currStack.stack[i].position,
                display: "flex",
                flex: "1",
                backgroundColor: currStack.stack[i].backgroundColor,
                justifyContent: "center",
                fontSize: "50px"
            } as CSSProperties;

            stackStyles.push(bs);
        }

        return (
            <div id="stack-container">
                {indexNums.map((div) => (
                    <div className="stack-item" style={stackStyles[div]}>{currStack.stack[div].alphabet}</div>
                ))}
            </div>
        );
    }
}

export default Stack;