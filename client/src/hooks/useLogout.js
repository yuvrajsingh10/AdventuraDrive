import { useAuthContext } from "./useAuthContext";
import { logoutUser } from "../features/userServices";
import { useState } from "react";

export const useLogout = () => {
  const { logout } = useAuthContext();
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  
  const authLogout = async () => {
    setIsLoading(true);
    setError(null);

    // sending request to server

    const response = await logoutUser();
    if(!response){
        setIsLoading(false);
        setError(response.error);
    }
    if(response){
        // deleting data from localStorage  and cookies;
        localStorage.removeItem("token");
        logout();
        isLoading(false);
    }
  };
  return {authLogout,isLoading,error}
};
