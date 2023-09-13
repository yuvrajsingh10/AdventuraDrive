import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  if (!props.auth) {
    return <Navigate to="/login" replace />;
  }
  return props.children;
};

export default PrivateRoute;
