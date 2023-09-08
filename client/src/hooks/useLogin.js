import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
import { loginUser, logoutUser } from "../features/userServices";

//custom hook for login functionality
export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { login, logout } = useAuthContext();

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
      localStorage.setItem("user", JSON.stringify(response.data));
      const refreshToken = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.setItem("token", response.data.token);

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
      logout();
      setIsLoading(false);
    }
  };

  return { authLogin, isLoading, error, signup, authLogout };
};
