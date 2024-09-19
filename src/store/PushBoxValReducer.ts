export const PUSH_BOX_TYPE = "PUSH_BOX_TYPE";

export interface PushBoxVal {
    empty: boolean;
    value: string;
}

export interface PushBoxValAction {
    type: string;
    payload: PushBoxVal | null;
}

export const PushBoxValReducer = (state: PushBoxVal | null = null,
    action: PushBoxValAction): PushBoxVal | null => {
    switch (action.type) {
        case PUSH_BOX_TYPE:
            return action.payload;
        default:
            return state;
    }
};