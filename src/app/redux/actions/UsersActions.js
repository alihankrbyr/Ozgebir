import instance from "apis/sansApi";
import { ActionTypes } from "../constants/ActionTypes";

export const fetchUsersRequest = () => {
  return {
    type: ActionTypes.FETCH_USERS_REQUEST,
  };
};
export const userDeleted = () => {
  return {
    type: ActionTypes.DELETE_USERS,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: ActionTypes.FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    instance
      .get("/user/")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const deleteUsers = (id) => {
  return (dispatch) => {
    instance.delete(`/user/${id}`).then((resp) => {
      dispatch(userDeleted());
      dispatch(fetchUsers());
    });
  };
};
