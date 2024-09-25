export const DEQUEUE_BOX_TYPE = "DEQUEUE_BOX_TYPE";

export interface DequeueBoxVal {
    empty: boolean;
    value: string;
    height: number;
}

export interface DequeueBoxValAction {
    type: string;
    payload: DequeueBoxVal | null;
}

export const DequeueBoxValReducer = (state: DequeueBoxVal | null = null,
    action: DequeueBoxValAction): DequeueBoxVal | null => {
    switch (action.type) {
        case DEQUEUE_BOX_TYPE:
            return action.payload;
        default:
            return state;
    }
};