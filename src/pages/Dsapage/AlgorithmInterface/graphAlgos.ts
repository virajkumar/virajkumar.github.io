import { AnyAction } from "redux";
import { Graph, Vertices, Edges, GRAPH_TYPE } from "../../../store/GraphReducer.ts";
import { AnyARecord } from "dns";
import { AppState } from "../../../store/AppState.ts";

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

interface TreeSet {
    id: number;
    vertices: Vertices[];
    edges: Edges[];
}

const findSet = async (trees: TreeSet[], vertex: Vertices): Promise<number> => {
    const tempTrees: TreeSet[] = trees;

    for (let i = 0; i < trees.length; i++) {
        if (trees[i].vertices.includes(vertex)) {
            return await new Promise((resolve, reject) => {
                resolve(trees[i].id);
            });
        }
    }
    return await new Promise((resolve, reject) => {
        resolve(-1);
    });
}

const unionSet = async (callDispatch: (action: AnyAction) => void, trees: TreeSet[], vertexU: Vertices, vertexV: Vertices, edge: Edges, graph: Graph) => {
    let newTreeSet: TreeSet;
    let newVertices: Vertices[] = [];
    let newEdges: Edges[] = [];
    let bigBreak: boolean = false;
    let index: number;

    for (let i = 0; i < trees.length; i++) {
        if (trees[i].vertices.includes(vertexU)) {
            for (let j = 0; j < trees.length; j++) {
                if (trees[j].vertices.includes(vertexV) && i != j) {
                    newVertices = trees[i].vertices;
                    newVertices = newVertices.concat(trees[j].vertices);
                    newEdges = trees[i].edges;
                    newEdges.push(edge)
                    newEdges = newEdges.concat(trees[j].edges);
                    newTreeSet = { id: i, vertices: newVertices, edges: newEdges };

                    index = graph.edges.indexOf(edge);
                    graph.edges[index].p1.color = "red";
                    graph.edges[index].p2.color = "red";
                    graph.edges[index].color = "red";
                    graph.edges[index].width = 4;
                    setTimeout(() => {
                        callDispatch({
                            type: GRAPH_TYPE,
                            payload: { ...graph }
                        });
                    }, 20);
                    await new Promise((resolve) => setTimeout(resolve, 20));

                    for (let o = 0; o < trees.length; o++) {
                        if (trees[o].id == newTreeSet.id) {
                            trees[o] = { ...newTreeSet };
                            break;
                        }
                    }

                    trees.splice(j, 1);

                    for (let p = j; p < trees.length; p++) {
                        trees[p].id -= 1;
                    }
                    bigBreak = true;
                    break;
                }
            }
            if (bigBreak) {
                break;
            }
        }
    }
}

const visualizeForest = async (callDispatch: (action: AnyAction) => void, graph: Graph, trees: TreeSet[]) => {
    let index: number = 0;
    for (let i = 0; i < trees.length; i++) {
        for (let j = 0; j < trees[i].edges.length; j++) {
            index = graph.edges.indexOf(trees[i].edges[j]);
            graph.edges[index].color = "red";
            graph.edges[index].width = 4;
            setTimeout(() => {
                callDispatch({
                    type: GRAPH_TYPE,
                    payload: { ...graph }
                });
            }, 20);
            await new Promise((resolve) => setTimeout(resolve, 20));
        }
    }
}

/* When writing the explanation/documentation for kruskal's algorithm, mention the disjoint-set data structure or the union-find data structure because the
   implementation that I've written here is very slow and I'm very sure that I DIDN'T implement the union-find data structure because its very slow.
*/
const kruskal = async (dsaItem: string | undefined, callDispatch: (action: AnyAction) => void, graph: Graph) => {

    //await assignWeights(callDispatch, graph);
    const trees: TreeSet[] = [];
    const mst: Edges[] = [];

    let i = 0;
    for (const vertex of graph.vertices) {
        trees.push({ id: i, vertices: [vertex], edges: [] })
        i += 1;
        //vertex.color = "red";
    }

    setTimeout(() => {
        callDispatch({
            type: GRAPH_TYPE,
            payload: { ...graph }
        });
    }, 20);
    await new Promise((resolve) => setTimeout(resolve, 20));

    let sortedEdges: Edges[] = [...graph.edges];
    sortedEdges.sort((a, b) => {
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            return 0;
        }
    })

    //sortedEdges = sortedEdges.reverse();
    let id1: number;
    let id2: number;

    for (let i = 0; i < sortedEdges.length; i++) {
        id1 = await findSet(trees, sortedEdges[i].p1);
        id2 = await findSet(trees, sortedEdges[i].p2);
        if (id1 !== id2) {
            mst.push(sortedEdges[i]);
            await unionSet(callDispatch, trees, sortedEdges[i].p1, sortedEdges[i].p2, sortedEdges[i], graph);
            //await visualizeForest(callDispatch, graph, trees);
        }
    }
}

interface Queue {
    vertex: Vertices;
    key: number;
}

const minHeapify = async (Q: Queue[], i: number) => {
    let l: number = 2 * i + 1;
    let r: number = 2 * i + 2;
    let smallest: number = 0;

    if (l <= Q.length - 1) {
        if (Q[l].key < Q[i].key) {
            smallest = l;
        } else {
            smallest = i;
        }
    } else {
        smallest = i;
    }

    if (r <= Q.length - 1) {
        if (Q[r].key < Q[smallest].key) {
            smallest = r;
        }
    }

    if (smallest !== i) {
        let tempQ: Queue = Q[i];
        Q[i] = Q[smallest];
        Q[smallest] = tempQ;
        await minHeapify(Q, smallest);
    }
}

const minHeapMinimum = async (Q: Queue[]): Promise<Queue> => {
    if (Q.length < 1) {
        console.log("error1");
    }

    return await new Promise((resolve, reject) => {
        resolve(Q[0]);
    });
}

const minHeapExtractMin = async (Q: Queue[]): Promise<Queue> => {
    const min = await minHeapMinimum(Q);
    Q[0] = Q[Q.length - 1];
    Q.splice(Q.length - 1, 1);
    await minHeapify(Q, Number.MAX_VALUE);

    return await new Promise((resolve, reject) => {
        resolve(min);
    });
}

const minHeapDecreaseKey = async (Q: Queue[], x: Queue, edgeLength: number) => {
    if (edgeLength > x.key) {
        console.log("error2");
    }
    x.key = edgeLength;
    let i: number = Q.map(function (q: Queue) { return q.vertex.id }).indexOf(x.vertex.id);
    let tempQ: Queue;
    let p: number = Math.floor(i / 2);

    while (i > 0 && (Q[p].key > Q[i].key)) {
        tempQ = Q[i];
        Q[i] = Q[p];
        Q[p] = tempQ;
        i = Math.floor(i / 2);
        p = Math.floor(i / 2);
    }
}

const minHeapInsert = async (Q: Queue[], x: Queue) => {
    let k: number = x.key;
    x.key = 0;
    Q.push(x);
    await minHeapDecreaseKey(Q, x, k);
}

const getEdge = async (u: Vertices, v: Vertices, graph: Graph): Promise<Edges> => {
    for (const edge of graph.edges) {
        if ((u.id == edge.p1.id && v.id == edge.p2.id) || (u.id == edge.p2.id && v.id == edge.p1.id)) {
            return await new Promise((resolve, reject) => {
                resolve(edge);
            })
        }
    }
    return await new Promise((resolve, reject) => {
        resolve({ p1: { id: 0, x: 0, y: 0, color: "black", radius: 4 }, p2: { id: 0, x: 0, y: 0, color: "black", radius: 4 }, color: "black", width: 4, length: 0 });
    })
}

const QVertex = async (Q: Queue[], vertex: Vertices, key: number): Promise<number> => {
    for (let i = 0; i < Q.length; i++) {
        if (Q[i].vertex === vertex) {
            Q[i].key = key;
            return await new Promise((resolve, reject) => {
                resolve(i);
            });
        }
    }
    return await new Promise((resolve, reject) => {
        resolve(0);
    });
}

const findAdjVerticesQ = async (Q: Queue[], u: Queue, graph: Graph, usedVerticesID: number[]): Promise<Queue[]> => {
    const adjQ: Queue[] = [];
    let indexV: number;
    let QMap: number[];
    let edgeVertexID: number;

    for (const edge of graph.edges) {
        if (edge.p1.x === u.vertex.x && edge.p1.y === u.vertex.y && !usedVerticesID.includes(edge.p2.id)) {
            indexV = Q.map(function (q: Queue) { return q.vertex.id }).indexOf(edge.p2.id);
            QMap = Q.map(function (q: Queue) { return q.vertex.id });
            edgeVertexID = edge.p2.id;
            adjQ.push(Q[Q.map(function (q: Queue) { return q.vertex.id }).indexOf(edge.p2.id)]);
        } else if (edge.p2.x === u.vertex.x && edge.p2.y === u.vertex.y && !usedVerticesID.includes(edge.p1.id)) {
            indexV = Q.map(function (q: Queue) { return q.vertex.id }).indexOf(edge.p1.id);
            QMap = Q.map(function (q: Queue) { return q.vertex.id });
            edgeVertexID = edge.p1.id;
            adjQ.push(Q[Q.map(function (q: Queue) { return q.vertex.id }).indexOf(edge.p1.id)]);
        }
    }

    return await new Promise((resolve, reject) => {
        resolve(adjQ);
    })
}

/* To implement prims algorithm, we are using a min-priority queue which in turn uses a heap. CLRS has a section on priority queues in the heapsort section. 
   Mention it.
*/
const prims = async (callDispatch: (action: AnyAction) => void, graph: Graph) => {
    let Q: Queue[] = [];
    let r: Queue = { vertex: graph.vertices[0], key: 0 };

    await minHeapInsert(Q, r);

    for (const vertex of graph.vertices.slice(1, graph.vertices.length)) {
        await minHeapInsert(Q, { vertex: vertex, key: 0 });
    }

    let u: Queue;
    let adjVerticesQ: Queue[];
    let verticesQ: Vertices[] = [];
    let currEdge: Edges;
    let qVertexIndex: number;
    let usedVerticesID: number[] = [];
    while (Q.length > 0) {
        u = await minHeapExtractMin(Q);
        u.vertex.color = "red";

        setTimeout(() => {
            callDispatch({
                type: GRAPH_TYPE,
                payload: { ...graph }
            });
        }, 20);
        await new Promise((resolve) => setTimeout(resolve, 20));

        adjVerticesQ = await findAdjVerticesQ(Q, u, graph, usedVerticesID);
        for (let i = 0; i < adjVerticesQ.length; i++) {
            for (let j = 0; j < Q.length; j++) {
                verticesQ.push(Q[j].vertex);
            }
            currEdge = await getEdge(u.vertex, adjVerticesQ[i].vertex, graph);
            if (verticesQ.map(function (v: Vertices) { return v.id }).includes(adjVerticesQ[i].vertex.id) && currEdge.length <= adjVerticesQ[i].key) {
                adjVerticesQ[i].vertex.color = "red";
                currEdge.color = "red";
                currEdge.width = 4;
                usedVerticesID.push(u.vertex.id);

                setTimeout(() => {
                    callDispatch({
                        type: GRAPH_TYPE,
                        payload: { ...graph }
                    });
                }, 20);
                await new Promise((resolve) => setTimeout(resolve, 20));

                //qVertexIndex = await QVertex(Q, adjVerticesQ[i].vertex, currEdge.length);
                await minHeapDecreaseKey(Q, adjVerticesQ[i], currEdge.length);
            }
        }
    }
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
        }
    }
}
export default graphAlgos;