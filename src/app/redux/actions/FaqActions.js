import instance from "apis/sansApi";
import { ActionTypes } from "../constants/ActionTypes";

const faqDeleted = () => ({
  type: ActionTypes.DELETE_FAQ,
});

export const SetFaq = (faq) => {
  return {
    type: ActionTypes.SET_FAQ,
    payload: faq,
  };
};

export const FetchFaq = () => async (dispatch) => {
  const response = await instance.get("/faq/");
  dispatch({
    type: ActionTypes.FETCH_FAQ,
    payload: response.data.detail,
  });
};

export const deleteFaq = (id) => {
  return function (dispatch) {
    instance.delete(`/faq/${id}`).then((resp) => {
      dispatch(faqDeleted());
      dispatch(FetchFaq());
    });
  };
};
