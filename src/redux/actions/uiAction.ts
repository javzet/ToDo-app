import { Dispatch } from "redux";
import { Error, ActionUI } from "../../types";

// Action Middleware
export const addErrors = (errors: Error[]) => {
  return (dispatch: Dispatch<ActionUI>) => {
    errors.forEach((error: Error) => {
      dispatch(addError(error));
    });
  };
};

export const addError = (error: Error): ActionUI => ({
  type: "SET_ERROR",
  payload: error
});

export const removeError = (error: Error): ActionUI => ({
  type: "CLEAR_ERROR",
  payload: error
});

export const removeErrors = (): ActionUI => ({
  type: "CLEAR_ALL_ERRORS",
  payload: {} as Error
});
