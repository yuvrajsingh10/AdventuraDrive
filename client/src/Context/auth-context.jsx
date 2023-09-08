import React, { useEffect, useMemo, useReducer, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
});

const initValue = {
  user: null,
  isLoggedIn: false,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {user: action.payload, isLoggedIn: true };
      break;
    case "LOGOUT_USER":
      return { user:null ,isLoggedIn:false}
      break;
    default:
      console.log("action.payload");
  }
  console.log(userData);
  return userData;
};

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer,initValue );

  function loginUser(data) {
    dispatch({ type: "LOGIN_USER", payload: data });
  }

  function logoutUser() {
    dispatch({ type: "LOGOUT_USER" });
  }
  const userAction = {
    user: state.user,
    login: loginUser,
    logout: logoutUser,
    isLoggedIn: state.isLoggedIn,
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "LOGIN_USER", payload: user });
    }
  }, []);
  
  
  return (
    <AuthContext.Provider value={userAction}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
