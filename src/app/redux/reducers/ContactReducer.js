import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  contacts: [],
  contact: {},
};

export const ContactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_CONTACTS:
      return { ...state, contacts: payload };
    case ActionTypes.ADD_CONTACT:
      return { ...state };
    case ActionTypes.DELETE_CONTACT:
      return { ...state };
    case ActionTypes.GET_CONTACT:
      return { ...state, contact: payload };
    default:
      return state;
  }
};
