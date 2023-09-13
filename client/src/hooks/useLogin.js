import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
import {
  loginUser,
  logoutUser,
  forgetUserPassword,
  registerUser,
} from "../features/userServices";
import { useCookies } from "react-cookie";

//custom hook for login functionality
export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { login, logout } = useAuthContext();
  const [cookie, setCookie, removeCookie] = useCookies("user");

  // login user function
  const authLogin = async (userData) => {
    setIsLoading(true);
    setError(null);

    const response = await loginUser(userData);
    if (!response.data) {
      setIsLoading(false);
      setError(response.error);
    }
    if (response.data) {
      // storing data to local storage and cookies;
      const token = localStorage.setItem("token", response.data.token);
      setCookie("user", response.data, [
        { expires: 360000 + Date.now(), secure: true },
      ]);

      //update auht context after login
      login(response.data);
      setIsLoading(false);
    }
  };

  //Register Functinality
  const signup = async (userData) => {
    setIsLoading(true);
    setError(null);

    const response = await registerUser(userData);
    if (!response.data) {
      setIsLoading(false);
      setError(response.error);
    }
    if (response.data) {
      setIsLoading(false);
    }
  };

  // Logout functionality
  const authLogout = async () => {
    setIsLoading(true);
    setError(null);
    // sending request to server

    const response = await logoutUser();
    if (response.error) {
      setIsLoading(false);
      setError(response.error);
    }
    if (response.successMsg) {
      // deleting data from localStorage  and cookies;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      removeCookie("user", [{ path: "/", secure: true }]);
      logout();
      setIsLoading(false);
    }
  };

  // Froget Password Functionality send the email to the user
  const forgetPassword = async (data) => {
    setIsLoading(true);
    setError(null);

    const response = await forgetUserPassword(data);
    if (response.error) {
      setIsLoading(false);
      setError(response.error);
    }
    if (response.data) {
      setIsLoading(false);
      setError(null);
    }
  };

  return { authLogin, isLoading, error, signup, authLogout, forgetPassword };
};
