import axios from "axios";
import { Dispatch } from "redux";
import {
  AuthReducer,
  AuthState,
  LoginCredentials,
  RegisterCredentials,
} from "../../types";

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
            name: response.data.usuario.nombre,
          },
        })
      );
    } catch (error) {
      console.error(error);
    }
  };
};

export const mRegister = async (data: RegisterCredentials) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.post(
        "https://todo-app-bkend.herokuapp.com/api/v1/usuario",
        data
      );
      console.log("a");
      dispatch(
        login({
          isAuthenticated: true,
          user: {
            id: response.data.usuario._id,
            token: response.data.token,
            name: response.data.usuario.nombre,
          },
        })
      );
    } catch (error) {
      console.error(error);
    }
  };
};

export const login = (data: AuthState): AuthReducer => {
  return {
    type: "LOGIN",
    payload: data,
  };
};

export const register = (data: AuthState): AuthReducer => {
  return {
    type: "REGISTER",
    payload: data,
  };
};
