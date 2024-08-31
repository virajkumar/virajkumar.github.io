export const DSA_ITEM_TYPE = "DSA_ITEM_TYPE";

export interface DSAItem {
    name: string;
}

export interface DSAItemAction {
    type: string;
    payload: DSAItem | null;
}

export const DSAItemReducer = (state: DSAItem | null = null,
    action: DSAItemAction): DSAItem | null => {
    switch (action.type) {
        case DSA_ITEM_TYPE:
            return action.payload;
        default:
            return state;
    }
};