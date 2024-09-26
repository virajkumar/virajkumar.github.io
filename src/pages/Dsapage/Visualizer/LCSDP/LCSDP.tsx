import React, { FC, CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../store/AppState';
import "./LCSDP.css";

const LCSDP: FC = () => {
    const currLCSDP = useSelector((state: AppState) => { return state.lcsdp });

    if (currLCSDP) {
        if (currLCSDP.processed) {
            const tableStyles: CSSProperties[][] = [];
            const xLength = currLCSDP.stringX.length;
            const yLength = currLCSDP.stringY.length;
            let bVal: string;

            for (let i = 0; i < xLength; i++) {
                tableStyles.push([]);
                for (let j = 0; j < yLength; j++) {
                    if (currLCSDP.bMatrix[i][j] === "") {
                        bVal = "";
                    } else if (currLCSDP.bMatrix[i][j] === "N") {
                        bVal = "url(N.png)";
                    } else if (currLCSDP.bMatrix[i][j] === "W") {
                        bVal = "url(W.png)";
                    } else {
                        bVal = "url(NW.png)";
                    }
                    const currCellStyles = {
                        minWidth: `${600 / yLength}px`,
                        maxWidth: `${600 / yLength}px`,
                        minHeight: `${600 / xLength}px`,
                        maxHeight: `${600 / xLength}px`,
                        left: `${(600 / yLength) * j}px`,
                        top: `${600 / xLength * i}px`,
                        position: "relative",
                        display: "flex",
                        flex: "1",
                        backgroundImage: bVal,
                        backgroundSize: `${600 / xLength}px`

                    } as CSSProperties
                    tableStyles[i].push(currCellStyles)
                }
            }

            for (let i = 0; i < currLCSDP?.stringX.length; i++) {
                for (let j = 0; j < currLCSDP?.stringY.length; j++) {

                }
            }

            return (
                <div id="visualizer-container-lcsdp">
                    <div id="strings-container">
                        <div id="string-x">StringX: {currLCSDP?.stringX}</div>
                        <div id="string-y">StringY: {currLCSDP?.stringY}</div>
                    </div>
                    <div id="visualizer-table-lcsdp">
                        {currLCSDP.cMatrix.map((row) => (row.map((cell) => (
                            <div className='cell' style={tableStyles[currLCSDP.cMatrix.indexOf(row)][row.indexOf(cell)]}> {cell} </div>
                        ))))}
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
                        {/* {currLCSDP.cMatrix.map((row) => (row.map((cell) => (
                        <div className='cell' style={tableStyles[currLCSDP.cMatrix.indexOf(row)][row.indexOf(cell)]}> {cell} </div>
                    ))))} */}
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