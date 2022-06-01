import { createStore } from "redux";
import { bookReducer } from "./reducers/reducer";

export const store=createStore(bookReducer)