import React, { useContext, useReducer } from "react";

export const VehicleContext = React.createContext({
  vehicles: {},
});

const inititalValues = {
  vehicles: [],
};

const vehicleReducer = (state, action) => {
  let VehicleData=[];
  switch (action.type) {
    case "CHECK_AVAILABLE_VEHICLES":
      return [...state,...action.payload];
    case "BOOK_VEHICLES":
      return "VEHICLES BOOKED SUCCESSFULLY";
    case "GET_VEHICLES":
      return vehicles;
    default:
      console.log("default working");
  }
};

const VehicleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(vehicleReducer, inititalValues);

  const checkVehicles = () => {
    dispatch({ type: "CHECK_AVAILABLE_VEHICLES" });
  };
  const bookVehicle = (data) => {
    dispatch({ type: "BOOK_VEHICLE", payload: data });
  };
  const getAllVehicles = (data) => {
    dispatch({ type: "GET_VEHICLES" });
  };

  const vehicles=[...state];
  
  return <VehicleContext.Provider values={vehicles}>children</VehicleContext.Provider>;
};

export default VehicleProvider;
