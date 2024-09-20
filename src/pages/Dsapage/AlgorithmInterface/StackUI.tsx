import React, { FC, useRef, useEffect } from "react";
import { AppState } from "../../../store/AppState.ts";
import { useDispatch, useSelector } from "react-redux";
import { PUSH_BOX_TYPE } from "../../../store/PushBoxValReducer.ts";
import { STACK_TYPE } from "../../../store/StackReducer.ts";
import { POP_BOX_TYPE } from "../../../store/PopBoxReducer.ts";
import { Element } from "../../../store/StackReducer.ts";

const StackUI: FC = () => {
    const dispatch = useDispatch();
    const currPush = useSelector((state: AppState) => (state.pushBox));
    const currStack = useSelector((state: AppState) => (state.stack));
    const currPop = useSelector((state: AppState) => (state.popBox));
    const currStackRef = useRef(currStack);
    const currPushRef = useRef(currPush);
    const currPopRef = useRef(currPop);

    // if (currPush?.empty === false) { }
    // dispatch({
    //     type: PUSH_BOX_TYPE,
    //     payload: {
    //         empty: false,
    //         value: ''
    //     }
    // })

    useEffect(() => {
        currPopRef.current = currPop;
    }, [currPop]);

    useEffect(() => {
        currStackRef.current = currStack;
    }, [currStack]);

    useEffect(() => {
        currPushRef.current = currPush;
    }, [currPush]);

    const handleClickPush = (event) => {
        if (currStackRef.current && currPushRef.current && currPopRef.current) {
            if (currStackRef.current?.currSize >= 0 && currStackRef.current?.currSize < currStackRef.current?.maxSize) {
                if (currStackRef.current.currSize < currStackRef.current.maxSize) {
                    currStackRef.current.stack.push({
                        id: (currStackRef.current.currSize).toString(),
                        alphabet: String.fromCharCode(currPushRef.current.value.charCodeAt(0)),
                        left: "270px",
                        top: `${-240 - (140 * (currStackRef.current.currSize - 1))}px`,
                        position: "relative",
                        backgroundColor: "green"
                    });
                    currStackRef.current.currSize += 1;
                    dispatch({
                        type: STACK_TYPE,
                        payload: { ...currStackRef.current }
                    });
                    dispatch({
                        type: PUSH_BOX_TYPE,
                        payload: {
                            empty: false,
                            value: String.fromCharCode(currPushRef.current.value.charCodeAt(0) + 1)
                        }
                    });
                    dispatch({
                        type: POP_BOX_TYPE,
                        payload: {
                            empty: true,
                            value: '',
                            height: currPopRef.current.height + 1,
                        }
                    })
                } else {        //The case when the stack is full and there is an overflow.

                }
            }
        }
    }

    const handleClickPop = (event) => {
        if (currStackRef.current && currPushRef.current && currPopRef.current) {
            if (currStackRef.current?.currSize > 0 && currStackRef.current?.currSize <= currStackRef.current?.maxSize) {
                if (currStackRef.current.currSize <= currStackRef.current.maxSize) {
                    const popElement: Element | undefined = currStackRef.current.stack.pop();
                    currStackRef.current.currSize -= 1;
                    dispatch({
                        type: STACK_TYPE,
                        payload: { ...currStackRef.current }
                    });
                    dispatch({
                        type: POP_BOX_TYPE,
                        payload: {
                            empty: false,
                            value: popElement?.alphabet,
                            height: currPopRef.current.height - 1,
                        }
                    });
                } else {        //The case when the stack is full and there is an overflow.
                }
            }
        }
    }

    return (
        <div id="algorithm-interface-container">
            <form id="algorithm-interface-form">
                <div>
                    <label id="push-button" htmlFor="push">Click to push onto stack:</label>
                    <button type="button" onClick={handleClickPush}>
                        PUSH
                    </button>
                </div>
                <div>
                    <label id="pop-button" htmlFor="pop">Click to pop from stack</label>
                    <button type="button" onClick={handleClickPop}>
                        POP
                    </button>
                </div>
            </form>
        </div>
    );
}

export default StackUI;
