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
    // try {
    //   const response = await axios.post(
    //     "https://todo-app-bkend.herokuapp.com/api/v1/login",
    //     data
    //   );
    //   console.log(response.data);
    //   // dispatch(login(response.data.usuario));
    // } catch (error) {
    //   console.error(error);
    // }
    // console.log(data);
    const response = await axios.post(
      "https://todo-app-bkend.herokuapp.com/api/v1/login",
      data
    );
    console.log(response);
  };
};

export const login = (data: LoginCredentials): AuthReducer => {
  return {
    type: "LOGIN",
    payload: data,
  };
};
