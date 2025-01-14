import { combineReducers, createStore } from "redux";
import { handleCounter, handleToken } from "./handler/reducers";

const rootReducer = combineReducers({
  token: handleToken, // It's a good practice to use camelCase for state slices
  counter: handleCounter, // It's a good practice to use camelCase for state slices
});

const store = createStore(rootReducer);
export default store;
