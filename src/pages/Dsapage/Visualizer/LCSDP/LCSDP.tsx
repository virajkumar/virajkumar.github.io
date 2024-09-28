import React, { FC, CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../store/AppState';
import "./LCSDP.css";
import npng from "./N.png";

const LCSDP: FC = () => {
    const currLCSDP = useSelector((state: AppState) => { return state.lcsdp });

    if (currLCSDP) {
        if (currLCSDP.processed) {
            const tableStyles: CSSProperties[][] = [];
            const xLength = currLCSDP.stringX.length;
            const yLength = currLCSDP.stringY.length;
            let bVal: string;

            for (let i = 0; i < xLength + 1; i++) {
                tableStyles.push([]);
                for (let j = 0; j < yLength + 1; j++) {
                    if (i === 0 || j === 0) {
                        bVal = "";
                    } else {
                        if (currLCSDP.bMatrix[i - 1][j - 1] === "") {
                            bVal = "";
                        } else if (currLCSDP.bMatrix[i - 1][j - 1] === "N") {
                            bVal = "url(/N.png)";
                        } else if (currLCSDP.bMatrix[i - 1][j - 1] === "W") {
                            bVal = "url(/W.png)";
                        } else {
                            bVal = "url(/NW.png)";
                        }
                    }
                    const currCellStyles = {
                        position: "relative",
                        display: "flex",
                        flex: "1",
                        backgroundImage: bVal,
                        backgroundSize: `${600 / (yLength + 1)}px`,
                        width: "100%",
                        justifyContent: "center",
                        alignContent: "end"
                    } as CSSProperties;
                    tableStyles[i].push(currCellStyles);
                }
            }

            let k = 0;
            let p = currLCSDP.stringX.length;
            let q = currLCSDP.stringY.length;
            let lcsStringTemp = currLCSDP.lcsString;
            let bMatrixTemp = currLCSDP.bMatrix;

            while (k < lcsStringTemp.length) {
                if (bMatrixTemp[p - 1][q - 1] === 'NW') {
                    tableStyles[p][q].border = "1px solid red";
                    tableStyles[p][q].boxSizing = "border-box";
                    k += 1;
                    p -= 1;
                    q -= 1;
                } else if (bMatrixTemp[p - 1][q - 1] === 'N') {
                    tableStyles[p][q].border = "1px solid red";
                    tableStyles[p][q].boxSizing = "border-box";
                    p -= 1;
                } else if (bMatrixTemp[p - 1][q - 1] === 'W') {
                    tableStyles[p][q].border = "1px solid red";
                    tableStyles[p][q].boxSizing = "border-box";
                    q -= 1;
                } else if (bMatrixTemp[p - 1][q - 1] === "") {
                    tableStyles[p][q].border = "1px solid red";
                    tableStyles[p][q].boxSizing = "border-box";
                    break;
                }
            }

            let tableMatrix: string[][] = [];

            for (let i = 0; i < xLength + 1; i++) {
                tableMatrix.push([]);
                for (let j = 0; j < yLength + 1; j++) {
                    if (i === 0 && j === 0) {
                        tableMatrix[i].push("-");
                    } else if (i === 0 && j !== 0) {
                        tableMatrix[i].push(currLCSDP.stringY[j - 1]);
                    } else if (i !== 0 && j === 0) {
                        tableMatrix[i].push(currLCSDP.stringX[i - 1]);
                    } else {
                        tableMatrix[i].push(currLCSDP.cMatrix[i - 1][j - 1].toString())
                    }
                }
            }

            return (
                <div id="visualizer-container-lcsdp">
                    <div id="strings-container">
                        <div id="string-x">StringX: {currLCSDP?.stringX}</div>
                        <div id="string-y">StringY: {currLCSDP?.stringY}</div>
                    </div>
                    <div id="visualizer-table-lcsdp">
                        {[...Array(xLength + 1).keys()].map((row) => (
                            <div className="row-container">
                                {[...Array(yLength + 1).keys()].map((col) => (
                                    <div className='cell' style={tableStyles[row][col]}> {tableMatrix[row][col]}
                                    </div>))}
                            </div>
                        ))}
                    </div>
                    <div id="lcs-string">
                        Longest Common Subsequence = {currLCSDP?.processed === true ? currLCSDP?.lcsString : ""}
                    </div>
                </div>
            )
        } else {
            return (
                <div id="visualizer-container-lcsdp">
                    <div id="strings-container">
                        <div id="string-x">StringX: {currLCSDP?.stringX}</div>
                        <div id="string-y">StringY: {currLCSDP?.stringY}</div>
                    </div>
                    <div id="visualizer-table-lcsdp">
                    </div>
                    <div id="lcs-string">
                        Longest Common Subsequence =
                    </div>
                </div>
            )
        }
    }
}

export default LCSDP;