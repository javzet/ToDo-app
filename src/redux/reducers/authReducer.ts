import { AuthReducer, AuthState } from "../../types";

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action: AuthReducer): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        isAuthenticated: true,
        user: {
          id: action.payload.user!.id,
          name: action.payload.user!.name,
          token: action.payload.user!.token,
        },
      };
    case "LOGOUT":
      return { isAuthenticated: false, user: null };
    case "REGISTER":
      return {
        isAuthenticated: true,
        user: {
          id: action.payload.user!.id,
          name: action.payload.user!.name,
          token: action.payload.user!.token,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
