import axios from "axios";
import { Dispatch } from "redux";
import {
  AuthReducer,
  AuthState,
  LoginCredentials,
  RegisterCredentials
} from "../../types";
import { addError } from "./uiAction";

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
          user: {
            id: response.data.usuario._id,
            token: response.data.token,
            name: response.data.usuario.nombre
          }
        })
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response);
        dispatch(
          addError({ error: error.response?.data.message, identifier: "login" })
        );
      }
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
          user: {
            id: response.data.usuario._id,
            token: response.data.token,
            name: response.data.usuario.nombre
          }
        })
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response);
        dispatch(
          addError({
            error: error.response?.data.message,
            identifier: "register"
          })
        );
      }
    }
  };
};

export const login = (data: AuthState): AuthReducer => {
  return {
    type: "LOGIN",
    payload: data
  };
};

export const register = (data: AuthState): AuthReducer => {
  return {
    type: "REGISTER",
    payload: data
  };
};
