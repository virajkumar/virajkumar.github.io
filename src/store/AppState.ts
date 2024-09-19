import { combineReducers } from "redux";
import { DSAItemReducer } from "./DSAItemReducer.ts";
import { BarOrderReducer } from "./BarOrderReducer.ts";
import { ResetFlagReducer } from "./ResetFlagReducer.ts";
import { PushBoxValReducer } from "./PushBoxValReducer.ts";

export const rootReducer = combineReducers({
    dsa_item: DSAItemReducer,
    reducedBars: BarOrderReducer,
    resetFlag: ResetFlagReducer,
    pushBox: PushBoxValReducer
});
export type AppState = ReturnType<typeof rootReducer>;