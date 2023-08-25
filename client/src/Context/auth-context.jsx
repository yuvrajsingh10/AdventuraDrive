import React, { useReducer } from "react";
import {register} from "../features/userServices"

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

const userReducer = (state, action) => {
    if(action.type==="LOGIN_USER"){
        console.log("USER LOGGED IN")
    }
    else if(action.type==="LOGOUT_USER"){
        console.log("USER LOGOUT SUCCESFULLY");
    }
    else if(action.type==="REGESTER_USER"){
      register(action.value)
    }
    return {
        isLoggedIn:true
    }
};

const AuthProvider = (props) => {
  const [user, dispatch] = useReducer(userReducer, initValue);
  async function loginUser (data){
    dispatch({type:"LOGIN_USER",value:data})
  }
  async function logoutUser(){
    dispatch({type:"LOGOUT_USER"});
  }

  async function signInUser (data){
    dispatch({type:"SIGNIN_USER",value:data})
  }
  const userAction ={
    user:user,
    login:loginUser,
    sign:signInUser,
    logout:logoutUser,
    isLoggedIn:user.isLoggedIn
  }
  return <AuthContext.Provider value={userAction}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
