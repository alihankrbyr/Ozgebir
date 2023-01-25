import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  faq: [],
};

export const FaqReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FAQ:
      return { ...state, faq: payload };
    case ActionTypes.FETCH_FAQ:
      return { ...state, faq: payload };
    case ActionTypes.DELETE_FAQ:
      return {
        ...state,
      };
    default:
      return state;
  }
};
