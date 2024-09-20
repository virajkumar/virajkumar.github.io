export const STACK_TYPE = "STACK_TYPE";

export interface Element {
    id: string;
    alphabet: string;
    left: string;
    top: string;
    position: string;
    backgroundColor: string;
}

export interface Stack {
    stack: Array<Element>;
    currSize: number;
    maxSize: number;
}

export interface StackAction {
    type: string;
    payload: Stack | null;
}

export const StackReducer = (
    state: Stack | null = null,
    action: StackAction
): Stack | null => {
    switch (action.type) {
        case STACK_TYPE:
            return action.payload;
        default:
            return state;
    }
};