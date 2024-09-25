export const ENQUEUE_BOX_TYPE = "PUSH_BOX_TYPE";

export interface EnqueueBoxVal {
    empty: boolean;
    value: string;
}

export interface EnqueueBoxValAction {
    type: string;
    payload: EnqueueBoxVal | null;
}

export const EnqueueBoxValReducer = (state: EnqueueBoxVal | null = null,
    action: EnqueueBoxValAction): EnqueueBoxVal | null => {
    switch (action.type) {
        case ENQUEUE_BOX_TYPE:
            return action.payload;
        default:
            return state;
    }
};