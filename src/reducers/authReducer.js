import { authReducer } from "../reducers/authReducer";
import { createContext, useReducer } from "react";

const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  }
  );
  
export const authReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return { ...state, user: action.payload };
      case "LOGOUT":
        return { ...state, user: null };
      case "AUTH_IS_READY":
        return { ...state, user: action.payload, authIsReady: true };
      default:
        return state;
    }
  };