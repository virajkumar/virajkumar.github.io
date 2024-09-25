import React, { FC, useRef, useEffect } from "react";
import { AppState } from "../../../store/AppState.ts";
import { useDispatch, useSelector } from "react-redux";
import { PUSH_BOX_TYPE } from "../../../store/PushBoxValReducer.ts";
import { STACK_TYPE } from "../../../store/StackReducer.ts";
import { POP_BOX_TYPE } from "../../../store/PopBoxReducer.ts";
import { QUEUE_TYPE } from "../../../store/QueueReducer.ts";
import { ENQUEUE_BOX_TYPE } from "../../../store/EnqueueBoxReducer.ts";
import { DEQUEUE_BOX_TYPE } from "../../../store/DequeueBoxReducer.ts";
import { ElementQ } from "../../../store/QueueReducer.ts";

const QueueUI: FC = () => {
    const dispatch = useDispatch();
    const currEnqueue = useSelector((state: AppState) => (state.enqueueBox));
    const currQueue = useSelector((state: AppState) => (state.queue));
    const currDequeue = useSelector((state: AppState) => (state.dequeueBox));
    const currEnqueueRef = useRef(currEnqueue);
    const currQueueRef = useRef(currQueue);
    const currDequeueRef = useRef(currDequeue);

    useEffect(() => {
        currDequeueRef.current = currDequeue;
    }, [currDequeue]);

    useEffect(() => {
        currQueueRef.current = currQueue;
    }, [currQueue]);

    useEffect(() => {
        currEnqueueRef.current = currEnqueue;
    }, [currEnqueue]);

    const handleClickEnqueue = (event) => {
        if (currQueueRef.current && currEnqueueRef.current && currDequeueRef.current) {
            if (currQueueRef.current?.currSize >= 0 && currQueueRef.current?.currSize < currQueueRef.current?.maxSize) {
                if (currQueueRef.current.currSize < currQueueRef.current.maxSize) {
                    currQueueRef.current.queue.push({
                        id: (currQueueRef.current.currSize).toString(),
                        alphabet: String.fromCharCode(currEnqueueRef.current.value.charCodeAt(0)),
                        left: "270px",
                        top: `${-200 - (140 * currQueueRef.current.currSize)}px`,//`${-240 - (140 * (currQueueRef.current.currSize - 1))}px`,
                        position: "relative",
                        backgroundColor: "green"
                    });
                    currQueueRef.current.currSize += 1;
                    dispatch({
                        type: QUEUE_TYPE,
                        payload: { ...currQueueRef.current }
                    });
                    dispatch({
                        type: ENQUEUE_BOX_TYPE,
                        payload: {
                            empty: false,
                            value: String.fromCharCode(currEnqueueRef.current.value.charCodeAt(0) + 1)
                        }
                    });
                    dispatch({
                        type: DEQUEUE_BOX_TYPE,
                        payload: {
                            empty: true,
                            value: '',
                            height: currDequeueRef.current.height + 1,
                        }
                    })
                } else {        //The case when the stack is full and there is an overflow.
                }
            }
        }
    }

    const handleClickDequeue = (event) => {
        if (currQueueRef.current && currEnqueueRef.current && currDequeueRef.current) {
            if (currQueueRef.current?.currSize > 0 && currQueueRef.current?.currSize <= currQueueRef.current?.maxSize) {
                if (currQueueRef.current.currSize <= currQueueRef.current.maxSize) {
                    const dequeueElement: ElementQ | undefined = currQueueRef.current.queue[0];
                    currQueueRef.current.currSize -= 1;
                    currQueueRef.current.queue = currQueueRef.current.queue.slice(1, currQueueRef.current.queue.length);
                    for (const elementQ of currQueueRef.current.queue) {
                        elementQ.id = (parseInt(elementQ.id) - 1).toString();
                        elementQ.top = `${parseInt(elementQ.top.slice(0, elementQ.top.length - 2)) + 140}px`;
                    }
                    dispatch({
                        type: QUEUE_TYPE,
                        payload: { ...currQueueRef.current }
                    });
                    dispatch({
                        type: DEQUEUE_BOX_TYPE,
                        payload: {
                            empty: false,
                            value: dequeueElement?.alphabet,
                            height: currDequeueRef.current.height - 1,
                        }
                    });
                } else {        //The case when the queue is full and there is an overflow.
                }
            }
        }
    }

    return (
        <div id="algorithm-interface-container">
            <form id="algorithm-interface-form">
                <div>
                    <label id="enqueue-button" htmlFor="enqueue">Click to push onto stack:</label>
                    <button type="button" onClick={handleClickEnqueue}>
                        ENQUEUE
                    </button>
                </div>
                <div>
                    <label id="dequeue-button" htmlFor="dequeue">Click to pop from stack</label>
                    <button type="button" onClick={handleClickDequeue}>
                        DEQUEUE
                    </button>
                </div>
            </form>
        </div>
    );
}

export default QueueUI;