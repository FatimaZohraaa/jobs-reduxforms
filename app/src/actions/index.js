import offers from "../apis/offers";

export const fetchOffers = () => async (dispatch) => {
  const response = await offers.get("/offers");
  dispatch({ type: "FETCH_OFFERS", payload: response.data });
};

export const addOffer = (offer) => async (dispatch) => {
  const response = await offers.post("/offers", offer);
  dispatch({ type: "ADD_OFFER", payload: response.data });
};

export const previewOffer = (formValues) => {
  return {
    type: "PREVIEW_OFFER",
    payload: formValues,
  };
};
