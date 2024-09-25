export const LCSDP_TYPE = "LCSDP_TYPE";

export interface LCSDP {
    stringX: string;
    stringY: string;
    cMatrix: number[][];
    bMatrix: string[][];
    processed: boolean;
    lcsString: string;
}

export interface LCSDPAction {
    type: string;
    payload: LCSDP | null;
}

export const LCSDPReducer = (state: LCSDP | null = null,
    action: LCSDPAction): LCSDP | null => {
    switch (action.type) {
        case LCSDP_TYPE:
            return action.payload;
        default:
            return state;
    }
};