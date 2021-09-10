/* eslint-disable no-case-declarations */

import { actionAuthError, authErrorState } from "../../types";

const initialState: authErrorState = [];

function authErrorReducer(state: authErrorState = initialState, action: actionAuthError): authErrorState {
  const { type, payload } = action;

  switch (type) {
    case "SET_ERRORS":
      return [...payload];

    case "SET_ERROR":
      return [...state, ...payload];

    case "CLEAR_ERROR":
      const filterErrors = state.filter(
        (error) => error.getError().identifier !== payload[0].getError().identifier
      );
      return [...filterErrors];

    case "CLEAR_ALL_ERRORS":
      return [];

    default:
      return state;
  }
}

export default authErrorReducer;
