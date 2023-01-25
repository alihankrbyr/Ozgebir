import instance from "apis/sansApi";
import { ActionTypes } from "../constants/ActionTypes";

export const FetchContacts = () => async (dispatch) => {
  const response = await instance.get("/contact/");
  dispatch({
    type: ActionTypes.FETCH_CONTACTS,
    payload: response.data.detail,
  });
};

export const DeleteContact = (id) => async (dispatch) => {
  const response = await instance.delete(`/contact/${id}`);
  dispatch({
    type: ActionTypes.DELETE_CONTACT,
    payload: response.data.detail,
  });
  dispatch(FetchContacts());
};

export const AddContact = (contact) => async (dispatch) => {
  const response = await instance.post("/contact/", contact);
  dispatch({
    type: ActionTypes.ADD_CONTACT,
    payload: response.data.detail,
  });
  dispatch(FetchContacts());
};

export const GetContact = (id) => async (dispatch) => {
  const response = await instance.get(`/contact/${id}`);
  dispatch({
    type: ActionTypes.GET_CONTACT,
    payload: response.data.detail,
  });
};
