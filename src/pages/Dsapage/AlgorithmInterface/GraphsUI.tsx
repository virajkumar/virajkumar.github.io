import React, { FC, useRef, useEffect } from "react";
import "./GraphsUI.css";
import { GRAPH_TYPE, Vertices } from "../../../store/GraphReducer.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/AppState";
import graphAlgos from "./graphAlgos.ts";
import { Delaunay } from "d3";
import { scaleLinear } from "d3-scale";

const GraphsUI: FC = () => {
    const dispatch = useDispatch();
    const currDSAItem = useSelector((state: AppState) => state.dsa_item?.name);
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
            const id = i;
            const x = Math.random() * 100;  // You can change the range of coordinates as needed
            const y = Math.random() * 100;
            const color = "black";
            const radius = 4;

            vertices.push({ id, x, y, color, radius });
        }
        if (currGraphRef.current) {
            currGraphRef.current.vertices = vertices;
        }

        const xScale = scaleLinear().domain([0, 100]).range([0, 600]);
        const yScale = scaleLinear().domain([0, 100]).range([0, 600]);


        const formattedVertices = vertices.map((d) => [xScale(d.x), yScale(d.y)]);
        const delaunay = Delaunay.from(formattedVertices);

        const { halfedges, triangles, hull } = delaunay;

        const edges = [
            ...Array.from(hull, (i, k) => [i, hull[(k + 1) % hull.length]]),
            ...Array.from(halfedges, (i: number, j) => i > j ? [[triangles[i], triangles[j]]] : []).flat()
        ].map(([i, j]) => ({ p1: vertices[i], p2: vertices[j], color: "grey", width: 1, length: Math.sqrt((vertices[i].x - vertices[j].x) ** 2 + (vertices[i].y - vertices[j].y) ** 2) }));

        if (currGraphRef.current) {
            currGraphRef.current.edges = edges;
            currGraphRef.current.processed = true;
        }

        dispatch({
            type: GRAPH_TYPE,
            payload: { ...currGraphRef.current }
        });
    }

    const handleGraphAlgos = (event) => {
        graphAlgos(currDSAItem, dispatch, currGraph);
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