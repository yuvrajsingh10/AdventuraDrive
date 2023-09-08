import { VehicleContext } from "../Context/Vehicle-context";
import { useContext } from "react";

export const useVehicleContext=()=>{
    const context = useContext(VehicleContext);
    if(!context){
        throw new Error("VehicleContext must be used inside an authProvider")
    }
    return context;
}