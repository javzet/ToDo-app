import { ActionAuth, authState } from "../../types";

const initialState: authState = {
  isAuthenticated: false
} as authState;

const authReducer = (state = initialState, action: ActionAuth): authState => {
  switch (action.type) {
    case "LOGIN":
      return {
        isAuthenticated: true,
        name: action.payload.name,
        token: action.payload.token
      };
    case "LOGOUT":
      return { isAuthenticated: false } as authState;
    case "REGISTER":
      return {
        isAuthenticated: true,
        name: action.payload.name,
        token: action.payload.token
      };
    default:
      return state;
  }
};

export default authReducer;
