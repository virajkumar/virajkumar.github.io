export const GRAPH_TYPE = "GRAPH_TYPE";

export interface Vertices {
    x: number;
    y: number;
}

export interface Graph {
    vertices: Vertices[];
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