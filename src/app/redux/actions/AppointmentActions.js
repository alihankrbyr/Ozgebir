import instance from "apis/sansApi";
import { ActionTypes } from "../constants/ActionTypes";

export const SetAppointments = (appointments) => {
  return {
    type: ActionTypes.SET_APPOINTMENTS,
    payload: appointments,
  };
};

export const FetchAppointments = () => async (dispatch) => {
  const response = await instance.get("/appointment/");
  dispatch({
    type: ActionTypes.FETCH_APPOINTMENTS,
    payload: response.data.detail,
  });
};
