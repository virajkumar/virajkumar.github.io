import React, { FC, useRef, useEffect } from 'react';
import "./DPUI.css";
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store/AppState';
import { LCSDP_TYPE } from '../../../store/LCSDPReducer.ts';

const DPUI: FC = () => {
    const dispatch = useDispatch();
    const currLCSDP = useSelector((state: AppState) => { return state.lcsdp });
    const currLCSDPRef = useRef(currLCSDP);

    useEffect(() => {
        currLCSDPRef.current = currLCSDP;
    }, [currLCSDP]);

    const handleGenStringX = (event) => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const length = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
        let randStringX = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randStringX += characters[randomIndex];
        }

        if (currLCSDPRef.current) {
            currLCSDPRef.current.stringX = randStringX;
            currLCSDPRef.current.processed = false;
        }
        dispatch({
            type: LCSDP_TYPE,
            payload: { ...currLCSDPRef.current }
        });
    }

    const handleGenStringY = (event) => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const length = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
        let randStringY = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randStringY += characters[randomIndex];
        }

        if (currLCSDPRef.current) {
            currLCSDPRef.current.stringY = randStringY;
        }
        dispatch({
            type: LCSDP_TYPE,
            payload: { ...currLCSDPRef.current }
        });
    }

    const handleFindLCS = (event) => {
        interface LCSLengthReturnType {
            bMatrix: string[][];
            cMatrix: number[][];
        }

        const lcsLength = (stringX: string | undefined, stringY: string | undefined, m: number | undefined, n: number | undefined): LCSLengthReturnType => {
            const b: string[][] = [];
            const c: number[][] = [];

            if (m && n) {
                for (let i = 0; i < m; i++) {
                    b.push([]);
                    c.push([]);
                    for (let j = 0; j < n; j++) {
                        b[i].push("");
                        c[i].push(0);
                    }
                }

                for (const i of Array(m).keys()) {
                    c[i][0] = 0;
                }

                for (const j of Array(n).keys()) {
                    c[0][j] = 0;
                }

                for (let i = 1; i < m; i++) {
                    for (let j = 1; j < n; j++) {
                        if (stringX && stringY) {
                            if (stringX[i] === stringY[j]) {
                                c[i][j] = c[i - 1][j - 1] + 1;
                                b[i][j] = "NW";
                            } else if (c[i - 1][j] >= c[i][j - 1]) {
                                c[i][j] = c[i - 1][j];
                                b[i][j] = "N";
                            } else {
                                c[i][j] = c[i][j - 1];
                                b[i][j] = "W";
                            }
                        }
                    }
                }
            }
            return { bMatrix: b, cMatrix: c };
        }

        const printLCS = (bMatrix: string[][], stringX: string | undefined, i: number | undefined, j: number | undefined): string | undefined => {
            if (i === 0 || j === 0) {
                return "";
            }
            if (stringX && i && j) {
                if (bMatrix[i][j] == "NW") {
                    return printLCS(bMatrix, stringX, i - 1, j - 1) + stringX[i];
                } else if (bMatrix[i][j] == "N") {
                    return printLCS(bMatrix, stringX, i - 1, j);
                } else {
                    return printLCS(bMatrix, stringX, i, j - 1);
                }
            }
        }

        if (currLCSDPRef.current) {
            const lcsReturnMatrices: LCSLengthReturnType = lcsLength(currLCSDPRef.current?.stringX, currLCSDPRef.current?.stringY, currLCSDPRef.current?.stringX.length, currLCSDPRef.current?.stringY.length);
            const lcsString: string | undefined = printLCS(lcsReturnMatrices.bMatrix, currLCSDPRef.current?.stringX, currLCSDPRef.current?.stringX.length - 1, currLCSDPRef.current?.stringY.length - 1);
            currLCSDPRef.current.bMatrix = lcsReturnMatrices.bMatrix;
            currLCSDPRef.current.cMatrix = lcsReturnMatrices.cMatrix;
            currLCSDPRef.current.processed = true;
            if (lcsString) {
                currLCSDPRef.current.lcsString = lcsString;
            }
            dispatch({
                type: LCSDP_TYPE,
                payload: { ...currLCSDPRef.current }
            });
        }
    }

    return (
        <div id="algorithm-interface-container-dp">
            <form id="algorithm-interface-form-dp">
                <label id="gen-string-x"> Generate string X </label>
                <button type="button" onClick={handleGenStringX}>GENERATE X</button>
                <br />
                <label id="gen-string-y"> Generate string Y </label>
                <button type="button" onClick={handleGenStringY}>GENERATE Y</button>
                <br />
                <label id="find-lcs"> Find the longest common subsequence(LCS) </label>
                <button type="button" onClick={handleFindLCS}>FIND</button>
            </form>
        </div>
    )
}

export default DPUI;
