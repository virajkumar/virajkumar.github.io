import React, { FC, useMemo } from "react";
import { scaleLinear } from "d3-scale";
import "./Graph.css";
import { Edges, Vertices } from "../../../../store/GraphReducer";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/AppState";

const Graph: FC = () => {
    const currGraph = useSelector((state: AppState) => (state.graph));
    const vertices: Vertices[] | undefined = currGraph?.vertices;
    const edges: Edges[] | undefined = currGraph?.edges;

    if (vertices && edges) {
        const xScale = scaleLinear().domain([0, 100]).range([0, 600]);
        const yScale = scaleLinear().domain([0, 100]).range([0, 600]);

        const allCircles: React.JSX.Element[] = vertices.map((d, i) => {
            return <circle key={i} cx={xScale(d.x)} cy={yScale(d.y)} r={d.radius} stroke={d.color} />
        });

        const allEdges: React.JSX.Element[] = edges.map((d, i) => {
            return <line x1={xScale(d.p1.x)} y1={yScale(d.p1.y)} x2={xScale(d.p2.x)} y2={yScale(d.p2.y)} stroke={d.color} strokeWidth={d.width} />
        });

        if (currGraph?.processed) {
            return (
                <div id="visualizer-container-graphs">
                    <svg id="svg-element" width={400} height={400}>
                        {allCircles}
                        {allEdges}
                    </svg>
                </div>
            );
        } else {
            return (
                <div id="visualizer-container-graphs">
                </div>
            );
        }
    } else {
        return (
            <div id="visualizer-container-graphs">
            </div>
        );
    }
}

export default Graph;