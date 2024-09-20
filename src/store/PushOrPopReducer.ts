export const PUSH_POP_TYPE = "PUSH_POP_TYPE";

export interface PushOrPopVal {
    push: boolean;
    pop: boolean;
}

export interface PushOrPopValAction {
    type: string;
    payload: PushOrPopVal | null;
}

export const PushOrPopValReducer = (state: PushOrPopVal | null = null,
    action: PushOrPopValAction): PushOrPopVal | null => {
    switch (action.type) {
        case PUSH_POP_TYPE:
            return action.payload;
        default:
            return state;
    }
};