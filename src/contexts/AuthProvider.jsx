import React, { createContext, useEffect, useReducer } from "react";
import jwt_decode from "jwt-decode";
import apiService from "../app/apiService";
import useCartStore from "../store/cart";

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "init":
      return {
        ...state,
        isInitialized: true,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
      };
    case "login":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "logout":
      return {
        ...state,
        isInitialized: false,
        isAuthenticated: false,
        user: null,
      };
  }
};

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getCart = useCartStore((state) => state.getCart);

  useEffect(() => {
    async function init() {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const response = await apiService.get("users/me");

          const { user, accessToken } = response.data.data;

          dispatch({ type: "init", payload: { user, isAuthenticated: true } });

          await getCart(user._id);

          window.localStorage.setItem("token", accessToken);
          window.localStorage.setItem("user", JSON.stringify(user));
        } else {
          dispatch({
            type: "init",
            payload: { isAuthenticated: false, user: null },
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
    init();
  }, []);

  async function login(user, cb) {
    dispatch({ type: "login", payload: { user } });
    getCart(user._id);
    cb();
  }

  async function logout(cb) {
    dispatch({ type: "logout" });
    cb();
  }

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
