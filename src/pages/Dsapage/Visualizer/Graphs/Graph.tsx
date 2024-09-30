import React, { FC, useMemo } from "react";
import { Delaunay } from "d3";
import { scaleLinear } from "d3-scale";
import "./Graph.css";
import { Vertices } from "../../../../store/GraphReducer";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/AppState";

const Graph: FC = () => {
    const currGraph = useSelector((state: AppState) => (state.graph));
    const data: Vertices[] | undefined = currGraph?.vertices;

    if (data) {
        const xScale = scaleLinear().domain([0, 100]).range([0, 600]);
        const yScale = scaleLinear().domain([0, 100]).range([0, 600]);

        const allCircles: React.JSX.Element[] = data.map((d, i) => {
            return <circle key={i} cx={xScale(d.x)} cy={yScale(d.y)} r={4} />
        });

        const formattedData = data.map((d) => [xScale(d.x), yScale(d.y)]);
        const delaunay = Delaunay.from(formattedData);
        const delaunayPath = delaunay.render();

        const allDelaunayShapes: React.JSX.Element = (
            <path d={delaunayPath} stroke="grey" fill="transparent" opacity={0.8} />
        );

        return (
            <div id="visualizer-container-graphs">
                <svg id="svg-element" width={400} height={400}>
                    {allCircles}
                    {allDelaunayShapes}
                </svg>
            </div>
        );
    }
}

export default Graph;