import React from "react";
import { useAuth } from "../../zustand/authUsers";
import { Navigate, Outlet } from "react-router-dom";

const RutaPortegida = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default RutaPortegida;
