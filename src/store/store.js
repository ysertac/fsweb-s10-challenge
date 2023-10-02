import { applyMiddleware, legacy_createStore as createStore } from "redux";
import myReducer from "../reducers";
import thunk from "redux-thunk";

export const store = createStore(myReducer, applyMiddleware(thunk));
