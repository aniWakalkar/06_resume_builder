// Initial State
const initialState = "";
const initialCounter = 0;

// Reducer
export const handleToken = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return action.payload;
    default:
      return state;
  }
};


export const handleCounter = (state = initialCounter, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialCounter;
    default:
      return state;
  }
};
