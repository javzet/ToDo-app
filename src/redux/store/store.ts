import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/authReducer";
import noteReducer from "../reducers/noteReducer";
import todoReducer from "../reducers/todoReducer";
import loadStore from "./loadStore";
import saveState from "./saveState";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
  }
}

const initalStore = loadStore();

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  notes: noteReducer,
  todos: todoReducer,
  auth: authReducer
});

export const store = createStore(
  reducers,
  initalStore,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => saveState(store.getState()));
