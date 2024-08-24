import { combineReducers } from "redux";
import { DSAItemReducer } from "./DSAItemReducer.ts";
export const rootReducer = combineReducers({
    dsa_item: DSAItemReducer
});
export type AppState = ReturnType<typeof rootReducer>;