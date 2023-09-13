import React, {useEffect, useReducer } from "react";

export const VehicleContext = React.createContext({
  vehicles: {},
  checkAvailableVehicles:()=>{},
  bookVehicle:()=>{},
  getAllVehicles:()=>{}
});

const inititalValues = {
  vehicles: [],
  availableVehicles:null
};

const vehicleReducer = (state, action) => {
  switch (action.type) {
    case "CHECK_AVAILABLE_VEHICLES":
      return {...state, availableVehicles:action.payload};
    case "BOOK_VEHICLES":
      return "VEHICLES BOOKED SUCCESSFULLY";
    case "GET_VEHICLES":
      return {...state,vehicles:action.payload};
    default:
      console.log("default working");
  }
};

const VehicleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(vehicleReducer, inititalValues);

  const checkAvailableVehicles = (data) => {
    dispatch({ type: "CHECK_AVAILABLE_VEHICLES",payload:data });
  };
  const bookVehicle = (data) => {
    dispatch({ type: "BOOK_VEHICLE", payload: data });
  };
  const getAllVehicles = (data) => {
    dispatch({ type: "GET_VEHICLES",payload:data });
  };

  const vehicles = {
    vehicles: state?.vehicles,
    availableVehicles:state?.availableVehicles,
    bookVehicle:bookVehicle,
    checkAvailableVehicles:checkAvailableVehicles,
    getAllVehicles:getAllVehicles,
  };

  return (
    <VehicleContext.Provider value={vehicles}>
      {children}
    </VehicleContext.Provider>
  );
};

export default VehicleProvider;
