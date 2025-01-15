import { combineReducers, createStore } from "redux";
import { handleCounter } from "./handler/reducers";

const rootReducer = combineReducers({
  counter: handleCounter, // It's a good practice to use camelCase for state slices
});

const store = createStore(rootReducer);
export default store;
