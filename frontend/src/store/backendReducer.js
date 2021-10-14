import { SET_TEST } from "./types/backendTypes";

const initialState = null;

const backendReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TEST:
      return payload;
    default:
      return state;
  }
};

export default backendReducer;