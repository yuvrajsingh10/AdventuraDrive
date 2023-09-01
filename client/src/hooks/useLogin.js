import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
import { loginUser } from "../features/userServices";
import { useCookies } from "react-cookie";

//custom hook for login functionality
export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { login } = useAuthContext();
  const [cookie,setCookie]=useCookies();

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
      const refreshToken=JSON.parse(localStorage.getItem('user'))
      setCookie('refreshToken',refreshToken.token);

      //update auht context after login
      login(response.data);
      setIsLoading(false);
    }
  };
  return { authLogin, isLoading, error };
};
