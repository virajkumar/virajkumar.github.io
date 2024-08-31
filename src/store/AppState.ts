import { combineReducers } from "redux";
import { DSAItemReducer } from "./DSAItemReducer.ts";
import { BarOrderReducer } from "./BarOrderReducer.ts";
export const rootReducer = combineReducers({
    dsa_item: DSAItemReducer,
    bars: BarOrderReducer
});
export type AppState = ReturnType<typeof rootReducer>;