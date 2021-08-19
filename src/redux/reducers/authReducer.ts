import { AuthReducer } from "../../types";

interface AuthState {
  isAuthenticated: boolean;
  user: {
    name: string;
    id: string;
  } | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = {}, action: AuthReducer) => {
  switch (action.type) {
    case "LOGIN":
      return { isAuthenticated: true, user: action.payload };
    case "LOGOUT":
      return { isAuthenticated: false, user: null };
    case "REGISTER":
      return { isAuthenticated: true, user: action.payload };
    default:
      return state;
  }
};

export default authReducer;
