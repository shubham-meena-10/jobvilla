import { Reducer, Reducer2, Reducer3 } from "./reducer";
import { combineReducers } from "redux";
const RootReducer = combineReducers({
    Reducer,
    Reducer2,
    Reducer3,
});

export default RootReducer;