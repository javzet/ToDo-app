/* eslint-disable no-case-declarations */

import { ActionUI, uiState } from "../../types";

const initialState: uiState = {
  errors: []
};

function uiReducer(state: uiState = initialState, action: ActionUI): uiState {
  const { type, payload } = action;

  switch (type) {
    case "SET_ERROR":
      const prevErrors = [...state.errors, payload];
      return {
        ...state,
        errors: prevErrors
      };
    case "CLEAR_ERROR":
      const filterErrors = state.errors.filter(
        (error) => error.identifier !== payload.identifier
      );
      return { ...state, errors: filterErrors };
    case "CLEAR_ALL_ERRORS":
      return { ...state, errors: [] };
    default:
      return state;
  }
}

export default uiReducer;
