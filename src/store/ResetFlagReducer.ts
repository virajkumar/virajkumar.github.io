export const RESET_FLAG_TYPE = "RESET_FLAG_TYPE";

export interface ResetFlag {
    flag: boolean;
}

export interface ResetFlagAction {
    type: string;
    payload: ResetFlag | null;
}

export const ResetFlagReducer = (state: ResetFlag | null = null,
    action: ResetFlagAction): ResetFlag | null => {
    switch (action.type) {
        case RESET_FLAG_TYPE:
            return action.payload;
        default:
            return state;
    }
};
//hi