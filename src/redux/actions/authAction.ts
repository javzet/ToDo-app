import axios from "axios";
import { Dispatch } from "redux";
import { AuthReducer } from "../../types";

type LoginCredentials = {
  email: string;
  password: string;
};

// Auth action middlewares
export const mLogin = (data: LoginCredentials) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = await fetch("https://todo-app-bkend.herokuapp.com/api/v1/login", {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data)
      })
      console.log(response);
      // dispatch(login(response.data.usuario));
    } catch (error) {
      console.error(error);
    }
  };
};

export const login = (data: LoginCredentials): AuthReducer => {
  return {
    type: "LOGIN",
    payload: data,
  };
};
