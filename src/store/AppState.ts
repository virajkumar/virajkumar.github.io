import { combineReducers } from "redux";
import { DSAItemReducer } from "./DSAItemReducer.ts";
import { BarOrderReducer } from "./BarOrderReducer.ts";
import { ResetFlagReducer } from "./ResetFlagReducer.ts";
import { PushBoxValReducer } from "./PushBoxValReducer.ts";
import { PopBoxValReducer } from "./PopBoxReducer.ts";
import { StackReducer } from "./StackReducer.ts";
import { EnqueueBoxValReducer } from "./EnqueueBoxReducer.ts";
import { QueueReducer } from "./QueueReducer.ts";
import { DequeueBoxValReducer } from "./DequeueBoxReducer.ts";
import { LCSDPReducer } from "./LCSDP.ts";

export const rootReducer = combineReducers({
    dsa_item: DSAItemReducer,
    reducedBars: BarOrderReducer,
    resetFlag: ResetFlagReducer,
    pushBox: PushBoxValReducer,
    popBox: PopBoxValReducer,
    stack: StackReducer,
    enqueueBox: EnqueueBoxValReducer,
    queue: QueueReducer,
    dequeueBox: DequeueBoxValReducer,
    lcsdp: LCSDPReducer
});

export type AppState = ReturnType<typeof rootReducer>;