import { applyMiddleware, legacy_createStore as createStore } from "redux";
import myReducer from "../reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

export const store = createStore(
  myReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
