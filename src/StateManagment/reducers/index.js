import { combineReducers } from "redux";
import basketReducer  from "./Basket";
import userReducer  from "./User";

const allReducers = combineReducers({
    basketReducer,
    userReducer
});

export default allReducers;