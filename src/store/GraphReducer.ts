export const GRAPH_TYPE = "GRAPH_TYPE";

export interface Vertices {
    x: number;
    y: number;
    color: string;
    radius: number;
}

export interface Edges {
    p1: Vertices;
    p2: Vertices;
    color: string;
    width: number;
}

export interface Graph {
    vertices: Vertices[];
    edges: Edges[];
    processed: boolean;
}

export interface GraphAction {
    type: string;
    payload: Graph | null;
}

export const GraphReducer = (state: Graph | null = null,
    action: GraphAction): Graph | null => {
    switch (action.type) {
        case GRAPH_TYPE:
            return action.payload;
        default:
            return state;
    }
};