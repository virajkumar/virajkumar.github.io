export const BAR_ORDER_TYPE = "BAR_ORDER_TYPE";

export interface Bar {
    id: number;
}

export interface Bars {
    bars: Array<Bar>;
}

export interface BarsAction {
    type: string;
    payload: Bars | null;
}

export const BarOrderReducer = (state: Bars | null = null,
    action: BarsAction): Bars | null => {
    switch (action.type) {
        case BAR_ORDER_TYPE:
            return action.payload;
        default:
            return state;
    }
};