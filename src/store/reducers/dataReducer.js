import * as Types from "../types";

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SET_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      // Return the initial state when no action types match.
      return state;
  }
};
