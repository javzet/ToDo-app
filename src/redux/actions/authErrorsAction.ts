import { ErrorForm } from "../../Models/AuthError";
import { actionAuthError } from "../../types";

export const addError = (error: ErrorForm): actionAuthError => ({
  type: "SET_ERROR",
  payload: [error]
});

export const addErrors = (errors: ErrorForm[]): actionAuthError => (
  {
    type: "SET_ERRORS",
    payload: errors
  }
);

export const removeError = (error: ErrorForm): actionAuthError => ({
  type: "CLEAR_ERROR",
  payload: [error]
});

export const removeErrors = (): actionAuthError => ({
  type: "CLEAR_ALL_ERRORS",
  payload: {} as ErrorForm[]
});
