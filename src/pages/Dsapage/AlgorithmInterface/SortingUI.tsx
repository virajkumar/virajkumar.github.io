import React, { FC } from "react";
import "./SortingUI.css";
import { AppState } from "../../../store/AppState.ts";
import { useDispatch, useSelector } from "react-redux";
import sortingAlgos from "./sortingAlgos.ts";
import { useRef, useEffect } from "react";
import { shuffle } from "../shuffleBars.ts";
import { BAR_ORDER_TYPE } from "../../../store/BarOrderReducer.ts";
import { RESET_FLAG_TYPE } from "../../../store/ResetFlagReducer.ts";

const SortingUI: FC = () => {
    const currDSAItem = useSelector((state: AppState) => state.dsa_item?.name);
    const currBars = useSelector((state: AppState) => state.reducedBars);
    const dispatch = useDispatch();
    const resetFlag = useSelector((state: AppState) => state.resetFlag);
    const currBarsRef = useRef(currBars);
    const resetFlagRef = useRef(resetFlag);

    useEffect(() => {
        currBarsRef.current = currBars;
    }, [currBars]);

    useEffect(() => {
        resetFlagRef.current = resetFlag;
    }, [resetFlag]);

    const handleClickPlay = () => {
        sortingAlgos(
            currDSAItem,
            dispatch,
            currBarsRef.current,
            resetFlagRef.current
        );
    };

    const handleClickReset = () => {
        if (resetFlagRef.current) {
            resetFlagRef.current.flag = true;
        }
        dispatch({
            type: RESET_FLAG_TYPE,
            payload: { ...resetFlagRef.current },
        });
        if (currBarsRef.current?.bars) {
            for (const i of Array(48).keys()) {
                currBarsRef.current.bars[i].backgroundColor = "blue";
            }
        }
        shuffle(currBarsRef.current?.bars);
        dispatch({
            type: BAR_ORDER_TYPE,
            payload: { ...currBarsRef.current },
        });
        setTimeout(() => {
            if (resetFlagRef.current) {
                resetFlagRef.current.flag = false;
                dispatch({
                    type: RESET_FLAG_TYPE,
                    payload: { ...resetFlagRef.current },
                });
            }
        }, 500);
    };

    return (
        <div id="algorithm-interface-container">
            <div id="algorithm-interface-box">
                <div id="play-button" onClick={handleClickPlay}>
                    Play
                </div>
                <div id="reset-button" onClick={handleClickReset}>
                    Reset
                </div>
            </div>
            <div id="label">{currDSAItem}</div>
        </div>
    );
};

export default SortingUI;