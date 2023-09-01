import React, { useEffect, useReducer, useState } from "react";
import { register, login, logout } from "../features/userServices";

import { toast } from "react-toastify";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  user: {},
  login: () => {},
  logout: () => {},
});

const initValue = {
  user: [],
  isLoggedIn: false,
};

const userReducer = async (state, action) => {
  const user = {};
  if (action.type === "LOGIN_USER") {
    const userData = await login(action.value);
    if (userData?.error) {
      console.log(userData.error);
    } else {
      toast.info("User registered successfully");
      localStorage.setItem("token", userData.data.token);
      user.isLoggedIn = true;
    }
    console.log("this is user", user);
  }
   else if (action.type === "REGESTER_USER") {
    const userData = await register(action.value);
    if (userData?.error) console.log(userData.error);
    else toast.info("User registered successfully");
  } 
  else if (action.type === "LOGOUT_USER") {
    const {succesMsg,error} = await logout();
    console.log("logged out",succesMsg)
    localStorage.removeItem("token");
    user.isLoggedIn = localStorage.getItem("token") !==null?true:false;
  }
  return {
    isLoggedIn: user.isLoggedIn,
  };
};

const AuthProvider = (props) => {
  const [user, dispatch] = useReducer(userReducer, initValue);
  const [isUserAlreadyLoggedIn, setIsUserAlreadyLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  function loginUser(data) {
    dispatch({ type: "LOGIN_USER", value: data });
  }
  function logoutUser() {
    dispatch({ type: "LOGOUT_USER" });
  }

  async function signInUser(data) {
    dispatch({ type: "REGESTER_USER", value: data });
  }
  const userAction = {
    user: user,
    login: loginUser,
    signUp: signInUser,
    logout: logoutUser,
    isLoggedIn: isUserAlreadyLoggedIn,
  };
  useEffect(() => {
    setIsUserAlreadyLoggedIn(localStorage.getItem("token") ? true : false);
  }, [user]);
  return (
    <AuthContext.Provider value={userAction}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
