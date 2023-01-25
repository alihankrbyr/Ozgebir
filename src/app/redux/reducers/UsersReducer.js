import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  users: [],
};

const UsersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
      };
    case ActionTypes.FETCH_USERS_SUCCESS:
      return {
        users: payload,
      };
    case ActionTypes.DELETE_USERS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default UsersReducer;
