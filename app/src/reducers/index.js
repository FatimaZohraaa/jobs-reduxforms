import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
const offersReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_OFFERS":
      return action.payload;
    case "ADD_OFFER":
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  offers: offersReducer,
  form: formReducer,
});
