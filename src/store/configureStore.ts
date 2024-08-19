import { createStore } from "redux";
import { rootReducer } from "./AppState.ts";
const configureStore = () => {
    return createStore(rootReducer, {});
};
export default configureStore;