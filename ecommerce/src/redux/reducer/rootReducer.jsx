import { shopReducer } from "./shopReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    //state store
    shop: shopReducer,
});

export default rootReducer;
