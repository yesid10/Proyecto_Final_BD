import React from "react";
import { useAuth } from "../../zustand/authUsers";
import { Navigate, Outlet } from "react-router-dom";

const RutaPortegida = () => {
  const { isAuthenticated, dataSinIn } = useAuth();

  console.log(dataSinIn)

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (dataSinIn?.rol !== 'ADMIN') {
    return <Navigate to="/acceso-denegado" replace />;
  }


  return <Outlet />;
};

export default RutaPortegida;
