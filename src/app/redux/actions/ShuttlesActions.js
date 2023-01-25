import instance from "apis/sansApi";
import { ActionTypes } from "../constants/ActionTypes";

export const SetShuttles = (shuttles) => {
  return {
    type: ActionTypes.SET_SHUTTLES,
    payload: shuttles,
  };
};

export const FetchShuttles = () => async (dispatch) => {
  const response = await instance.get("/shuttle/");
  dispatch({
    type: ActionTypes.FETCH_SHUTTLES,
    payload: response.data.detail,
  });
};
