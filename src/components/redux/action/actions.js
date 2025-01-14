// Action Types
const SET_TOKEN = "SET_TOKEN";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// --------------------------------------------
// Action Creator
export const setToken = (query) => {
  return {
    type: SET_TOKEN,
    payload: query,
  };
};


export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const reset = () => {
  return {
    type: RESET
  };
};