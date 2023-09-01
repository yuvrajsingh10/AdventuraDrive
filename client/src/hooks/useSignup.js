import { useState } from "react";
//import { useAuthContext } from "./useAuthContext";
import { registerUser } from "../features/userServices";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);


  const signup = async (userData) => {
    setIsLoading(true);
    setError(null);

    const response = await registerUser(userData);
    if (!response.data) {
      setIsLoading(false);
      setError(response.error);
    }
    if (response.data) {
      //localStorage.setItem("user", JSON.stringify(response.data));

      //   update the auth context
      // login(response.data);
      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
};
