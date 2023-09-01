import React, { useEffect, useReducer, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  user:null,
  login: () => {},
  logout: () => {},
});

const initValue = {
  user: null,
  isLoggedIn: false,
};

const userReducer = async (state, action) => {

  switch (action.type) {
    case "LOGIN_USER":
      const user=action.payload;
      return { user:action.payload,isLoggedIn:true};
    case "LOGOUT_USER":
      return { user: null,isLoggedIn:true };
    default:
      console.log('action.payload')
      return state;
  }
};

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, initValue);

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
  console.log("AuthContext state", state.user);
  console.log(userAction)
  useEffect(()=>{
    const user =JSON.parse(localStorage.getItem('user'));
    if(user){
      userAction.login(user);
    }
  },[])
  return (
    <AuthContext.Provider value={userAction}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
