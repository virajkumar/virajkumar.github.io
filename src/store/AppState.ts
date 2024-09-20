import { combineReducers } from "redux";
import { DSAItemReducer } from "./DSAItemReducer.ts";
import { BarOrderReducer } from "./BarOrderReducer.ts";
import { ResetFlagReducer } from "./ResetFlagReducer.ts";
import { PushBoxValReducer } from "./PushBoxValReducer.ts";
import { PopBoxValReducer } from "./PopBoxReducer.ts";
import { StackReducer } from "./StackReducer.ts";
import { PushOrPopValReducer } from "./PushOrPopReducer.ts";

export const rootReducer = combineReducers({
    dsa_item: DSAItemReducer,
    reducedBars: BarOrderReducer,
    resetFlag: ResetFlagReducer,
    pushBox: PushBoxValReducer,
    popBox: PopBoxValReducer,
    stack: StackReducer,
    pushOrPop: PushOrPopValReducer
});
export type AppState = ReturnType<typeof rootReducer>;