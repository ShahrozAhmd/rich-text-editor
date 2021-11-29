import { state } from "Context/State/state";
import * as actionTypes from "Context/ActionTypes/action-types";

const Reducer = (state = state, action) => {
  switch (action) {
    case actionTypes.CREATE_NEW_DOCUMENT:
      return null;
    case actionTypes.UPLOAD_DOCUMENT:
      return null;
  }
};

export default Reducer;
