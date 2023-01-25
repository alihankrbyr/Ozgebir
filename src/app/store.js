import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./redux/reducers/index";
import thunk from "redux-thunk";

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnchancers(applyMiddleware(thunk))
);
