import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../store/AppState';
import "./LCSDP.css";

const LCSDP: FC = () => {
    const currLCSDP = useSelector((state: AppState) => { return state.lcsdp });

    return (
        <div id="visualizer-container-lcsdp">
            <div id="strings-container">
                <div id="string-x">StringX: {currLCSDP?.stringX}</div>
                <div id="string-y">StringY: {currLCSDP?.stringY}</div>
            </div>
            <div id="visualizer-table-lcsdp">
            </div>
            <div id="lcs-string">
                LCS = {currLCSDP?.lcsString}
            </div>
        </div>
    )
}

export default LCSDP;