import React, {useEffect, useReducer } from "react";

export const VehicleContext = React.createContext({
  vehicles: {},
  checkAvailableVehicles:()=>{},
  bookVehicle:()=>{},
  getAllVehicles:()=>{}
});

const inititalValues = {
  vehicles: [],
};

const vehicleReducer = (state, action) => {
  switch (action.type) {
    case "CHECK_AVAILABLE_VEHICLES":
      return {...state, ehicles:action.payload};
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

  const checkAvailableVehicles = () => {
    dispatch({ type: "CHECK_AVAILABLE_VEHICLES" });
  };
  const bookVehicle = (data) => {
    dispatch({ type: "BOOK_VEHICLE", payload: data });
  };
  const getAllVehicles = (data) => {
    dispatch({ type: "GET_VEHICLES",payload:data });
  };

  const vehicles = {
    vehicles: [...state.vehicles],
    bookVehicle:bookVehicle,
    checkAvailableVehicles:checkAvailableVehicles,
    getAllVehicles:getAllVehicles,
  };
console.log(state)
  useEffect(()=>{
    const vehicleData = JSON.parse(localStorage.getItem('vehicles'))
    if(vehicleData){
      dispatch({ type: "GET_VEHICLES",payload:vehicleData });
    }
  },[])
  return (
    <VehicleContext.Provider value={vehicles}>
      {children}
    </VehicleContext.Provider>
  );
};

export default VehicleProvider;
