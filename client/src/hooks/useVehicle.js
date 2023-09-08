import { useVehicleContext } from "./useVehicleContext";
import { useState } from "react";
import { getVehicles } from "../features/vehicleServices";

export const useVehicle = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { getAllVehicles } = useVehicleContext();

  
  const getVehicles = async () => {
    setIsLoading(false);
    setError(null);

    const response = await getVehicles();
    console.log(response);
    if (!response) {
      setIsLoading(false);
      setError(true);
    }
    if (response) {
      getAllVehicles(response.data);
    }
  };

  const bookVehicle = async () => {};

  const checkAvailability = async () => {};
  return { getVehicles,isLoading,error ,bookVehicle,checkAvailability };
};
