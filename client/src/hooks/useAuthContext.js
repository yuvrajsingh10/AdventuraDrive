import { AuthContext } from "../Context/auth-context.jsx";
import { useContext } from "react";

export const useAuthContext=()=>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuthContext must be used inside an authProvider")
    }
    return context;
}