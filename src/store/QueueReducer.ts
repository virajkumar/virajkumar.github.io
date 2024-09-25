export const QUEUE_TYPE = "QUEUE_TYPE";

export interface ElementQ {
    id: string;
    alphabet: string;
    left: string;
    top: string;
    position: string;
    backgroundColor: string;
}

export interface Queue {
    queue: Array<ElementQ>;
    currSize: number;
    maxSize: number;
    inplace: boolean;
}

export interface QueueAction {
    type: string;
    payload: Queue | null;
}

export const QueueReducer = (
    state: Queue | null = null,
    action: QueueAction
): Queue | null => {
    switch (action.type) {
        case QUEUE_TYPE:
            return action.payload;
        default:
            return state;
    }
};