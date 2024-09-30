import React, { FC, useRef, useEffect } from "react";
import "./GraphsUI.css";
import { GRAPH_TYPE, Vertices } from "../../../store/GraphReducer.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/AppState";

const GraphsUI: FC = () => {
    const dispatch = useDispatch();
    const currGraph = useSelector((state: AppState) => { return state.graph });
    const currGraphRef = useRef(currGraph);

    useEffect(() => {
        currGraphRef.current = currGraph;
    }, [currGraph]);

    const handleGenGraph = (event) => {
        // Generate a random number of points between 10 and 20
        const numPoints = Math.floor(Math.random() * 51) + 50;
        const vertices: Vertices[] = [];

        for (let i = 0; i < numPoints; i++) {
            const x = Math.random() * 100;  // You can change the range of coordinates as needed
            const y = Math.random() * 100;

            vertices.push({ x, y });
        }
        if (currGraphRef.current) {
            currGraphRef.current.vertices = vertices;
        }

        dispatch({
            type: GRAPH_TYPE,
            payload: { ...currGraphRef.current }
        });
    }

    const handleGraphAlgos = (event) => {

    }

    return (
        <div id="algorithm-interface-container-graphs">
            <form id="algorithm-interface-form-graphs">
                <label id="gen-graph"> Generate random graph </label>
                <button type="button" onClick={handleGenGraph}>NEW GRAPH</button>
                <br />
                <label id="run-graph-algorithm">Run graph algorithm</label>
                <button type="button" onClick={handleGraphAlgos}>RUN</button>
            </form>
        </div>
    );
}

export default GraphsUI;