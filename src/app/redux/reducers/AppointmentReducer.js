import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  appointments: [],
};

export const AppointmentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_APPOINTMENTS:
      return { ...state, appointments: payload };
    case ActionTypes.FETCH_APPOINTMENTS:
      return { ...state, appointments: payload };
    default:
      return state;
  }
};
