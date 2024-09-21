import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, redirectTo }) => {
  const isAuthenticated = () => !!localStorage.getItem("token");

  if (isAuthenticated()) {
    return <Navigate to={redirectTo} />;
  }

  return children;
};

export default ProtectedRoute;
