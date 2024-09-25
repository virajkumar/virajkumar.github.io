import React, { FC, CSSProperties } from 'react';
import "./Queue.css"
import { useSelector } from 'react-redux';
import { AppState } from '../../../../store/AppState';

const Queue: FC = () => {
    const currQueue = useSelector((state: AppState) => { return state.queue });

    if (currQueue) {
        //if (currQueue.inplace == true) {

        let queueStyles: CSSProperties[] = [];
        let indexNums: number[] = [];

        for (const i of Array(currQueue.currSize).keys()) {
            indexNums.push(0);
            indexNums[i] = parseInt(currQueue.queue[i].id);
        }

        for (const i of indexNums) {
            const bs = {
                minWidth: "50px",
                maxWidth: "50px",
                minHeight: "50px",
                maxHeight: "50px",
                left: currQueue.queue[i].left,
                top: currQueue.queue[i].top,
                position: currQueue.queue[i].position,
                display: "flex",
                flex: "1",
                backgroundColor: currQueue.queue[i].backgroundColor,
                justifyContent: "center",
                fontSize: "50px"
            } as CSSProperties;

            queueStyles.push(bs);
        }

        return (
            <div id="queue-container">
                {indexNums.map((div) => (
                    <div className="queue-item" style={queueStyles[div]}>{currQueue.queue[div].alphabet}</div>
                ))}
            </div>
        );
    }
}

export default Queue;