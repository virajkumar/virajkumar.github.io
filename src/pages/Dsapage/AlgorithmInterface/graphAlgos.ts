import { AnyAction } from "redux";
import { Graph, Vertices, Edges, GRAPH_TYPE } from "../../../store/GraphReducer.ts";

interface EdgeAndVertex {
    edgeID: number;
    adjVertex: Vertices;
}

const findAdjVertices = async (edges: Edges[], currVertex: Vertices): Promise<EdgeAndVertex[]> => {
    const adjVertices: EdgeAndVertex[] = [];
    for (let i = 0; i < edges.length; i++) {
        if (edges[i].p1.x === currVertex.x && edges[i].p1.y === currVertex.y) {
            adjVertices.push({ edgeID: i, adjVertex: edges[i].p2 });
        }
        if (edges[i].p2.x === currVertex.x && edges[i].p2.y === currVertex.y) {
            adjVertices.push({ edgeID: i, adjVertex: edges[i].p1 });
        }
    }
    return await new Promise((resolve, reject) => {
        resolve(adjVertices);
    });
}

const bfs = async (dsaItem: string | undefined, callDispatch: (action: AnyAction) => void, graph: Graph) => {
    const startVertex = graph.vertices[0];
    const edges = graph.edges;
    let queue: Vertices[] = [];

    queue.push(startVertex);
    startVertex.color = "green";
    let currVertex: Vertices;
    let adjVertices: EdgeAndVertex[];

    while (queue.length != 0) {
        currVertex = queue[0];
        queue = queue.slice(1, queue.length);
        adjVertices = await findAdjVertices(edges, currVertex);
        for (const adjV of adjVertices) {
            if (adjV.adjVertex.color != "red") {
                adjV.adjVertex.color = "red";
                adjV.adjVertex.radius = 6;
                edges[adjV.edgeID].color = "red";
                edges[adjV.edgeID].width = 4;
                queue.push(adjV.adjVertex);
            }

            setTimeout(() => {
                callDispatch({
                    type: GRAPH_TYPE,
                    payload: { ...graph }
                });
            }, 5);
            await new Promise((resolve) => setTimeout(resolve, 20));
        }
    }
}

const dfsVisit = async (callDispatch: (action: AnyAction) => void, graph: Graph, vertex: Vertices) => {
    const edges = graph.edges;
    const vertices = graph.vertices;
    vertex.color = "red";
    vertex.radius = 6;

    setTimeout(() => {
        callDispatch({
            type: GRAPH_TYPE,
            payload: { ...graph }
        });
    }, 20);
    await new Promise((resolve) => setTimeout(resolve, 20));

    let adjVertices: EdgeAndVertex[] = await findAdjVertices(edges, vertex);
    for (const adjV of adjVertices) {
        if (adjV.adjVertex.color != "red" && edges[adjV.edgeID].color != "red") {
            edges[adjV.edgeID].color = "red";
            edges[adjV.edgeID].width = 4;

            setTimeout(() => {
                callDispatch({
                    type: GRAPH_TYPE,
                    payload: { ...graph }
                });
            }, 20);
            await new Promise((resolve) => setTimeout(resolve, 20));

            await dfsVisit(callDispatch, graph, adjV.adjVertex);
        }
    }
}

const dfs = async (dsaItem: string | undefined, callDispatch: (action: AnyAction) => void, graph: Graph) => {
    for (const vertex of graph.vertices) {
        if (vertex.color != "red") {
            await dfsVisit(callDispatch, graph, vertex);
        }
    }
}

const kruskal = (dsaItem: string | undefined, callDispatch: (action: AnyAction) => void, graph: Graph) => {

}
const prims = (dsaItem: string | undefined, callDispatch: (action: AnyAction) => void, graph: Graph) => {

}
const bellmanFord = (dsaItem: string | undefined, callDispatch: (action: AnyAction) => void, graph: Graph) => {

}
const floydWarshall = (dsaItem: string | undefined, callDispatch: (action: AnyAction) => void, graph: Graph) => {

}

const graphAlgos = (dsaItem: string | undefined, callDispatch: (action: AnyAction) => void, graph: Graph | null) => {
    if (graph) {
        switch (dsaItem) {
            case "bfs-graphs":
                bfs(dsaItem, callDispatch, graph);
                break;
            case "dfs-graphs":
                dfs(dsaItem, callDispatch, graph);
                break;
            case "kruskals-algorithm-graphs":
                kruskal(dsaItem, callDispatch, graph);
                break;
            case "prims-algorithm-graphs":
                prims(dsaItem, callDispatch, graph);
                break;
            case "bellman-ford-algorithm-graphs":
                bellmanFord(dsaItem, callDispatch, graph);
                break;
            case "floyd-warshall-algorithm-graphs":
                floydWarshall(dsaItem, callDispatch, graph);
                break;
        }
    }
}
export default graphAlgos;