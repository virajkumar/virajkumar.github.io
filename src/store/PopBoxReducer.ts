export const POP_BOX_TYPE = "POP_BOX_TYPE";

export interface PopBoxVal {
    empty: boolean;
    value: string;
    height: number;
}

export interface PopBoxValAction {
    type: string;
    payload: PopBoxVal | null;
}

export const PopBoxValReducer = (state: PopBoxVal | null = null,
    action: PopBoxValAction): PopBoxVal | null => {
    switch (action.type) {
        case POP_BOX_TYPE:
            return action.payload;
        default:
            return state;
    }
};