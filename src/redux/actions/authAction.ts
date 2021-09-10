import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import { ErrorForm } from "../../Models/AuthError";
import {
  ActionAuth,
  authState,
  LoginCredentials,
  RegisterCredentials
} from "../../types";
import { addError } from "./authErrorsAction";

export interface AuthRegisterResponseError {
  ok: boolean;
  message: string;
}

export interface AuthLoginResponseError {
  ok: boolean;
  err: { message: string }
}

function authResponseError<T = any>(
  dispatch: Dispatch,
  error: any,
  handler: (error: AxiosError<T>,
) => void) {
  if (axios.isAxiosError(error)) {
    if (!error.response) {
      const newError = new ErrorForm("server", "Server error, please try again later or contact with the developer");
      dispatch(addError(newError));
    } else {
      handler(error);
    }
  } else {
    console.error(error);
  }
}

// Auth action middlewares
export const mLogin = (data: LoginCredentials) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.post(
        "https://todo-app-bkend.herokuapp.com/api/v1/login",
        data
      );
      dispatch(
        login({
          isAuthenticated: true,
          token: response.data.token,
          name: response.data.usuario.nombre
        })
      );
    } catch (error) {
      authResponseError<AuthLoginResponseError>(dispatch, error, (err) => {
        const newError = new ErrorForm("login", err.response!.data.err.message);
        dispatch(addError(newError));
      });
    }
  };
};

export const mRegister = (data: RegisterCredentials) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.post(
        "https://todo-app-bkend.herokuapp.com/api/v1/usuario",
        data
      );
      dispatch(
        login({
          isAuthenticated: true,
          token: response.data.token,
          name: response.data.usuario.nombre
        })
      );
    } catch (error) {
      authResponseError<AuthRegisterResponseError>(dispatch, error, (err) => {
        const newError = new ErrorForm("register", err.response!.data.message);
        dispatch(addError(newError));
      });
    }
  };
};

export const login = (data: authState): ActionAuth => {
  return {
    type: "LOGIN",
    payload: data
  };
};

export const register = (data: authState): ActionAuth => {
  return {
    type: "REGISTER",
    payload: data
  };
};
