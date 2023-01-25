import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
 shuttles: [],
};

export const ShuttlesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SHUTTLES:
      return { ...state, shuttles: payload };
    case ActionTypes.FETCH_SHUTTLES:
      return { ...state, shuttles: payload };
    default:
      return state;
  }
};
