import { combineReducers } from "redux";
import { userReductor } from "./reductors";

export const rootReductors = combineReducers({
    userReductor,
})