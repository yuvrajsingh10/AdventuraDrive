import { useVehicleContext } from "./useVehicleContext";
import { useState } from "react";
import { getVehicles, checkAvailability } from "../features/vehicleServices";

export const useVehicle = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { getAllVehicles, checkAvailableVehicles } = useVehicleContext();

  const getVehiclesData = async () => {
    setIsLoading(true);
    setError(null);

    const response = await getVehicles();
    if (!response.data) {
      setIsLoading(false);
      setError(response.error);
    }
    if (response.data) {
      localStorage.setItem("vehicles", JSON.stringify(response.data));
      getAllVehicles();
    }
  };

  const bookVehicle = async () => {
    setIsLoading(true);
    setError(null);

    const response = await getVehicles();
    if (response.error) {
      setIsLoading(false);
      setError(response.error);
    }
    if (response.data) {
      
      setIsLoading(false);
      setError(null);
    }
  };

  const checkAvailabilityVehicle = async (data) => {
    setIsLoading(true);
    setError(null);

    const response = await checkAvailability(data);
    if (!response.data) {
      setIsLoading(false);
      setError(response.error);
    }
    if (response) {
      checkAvailableVehicles(data);
      setIsLoading(false);
      setError(null);
    }
  };
  return {
    getVehiclesData,
    isLoading,
    error,
    bookVehicle,
    checkAvailabilityVehicle,
  };
};
