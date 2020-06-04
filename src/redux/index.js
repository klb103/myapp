import userReducer from "./user";

import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
    userReducer
});

const store = createStore(rootReducer);

// FIXME: Debug subscription to show when state changes
store.subscribe(() => {
    console.log("[REDUX] State change: ", store.getState());
});
export default store;
