import { createStore } from "redux";
import { rootReductors } from "../reductors";

export const store = createStore(rootReductors)