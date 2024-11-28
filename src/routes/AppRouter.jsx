import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Products from "../Components/products/Products";
import LayoutComponent from "../Components/Layout/LayoutComponent";
import { ThemeProvider } from "@material-tailwind/react";
import DetailProduct from "../Components/products/detailsProducts/DetailProduct";
import DetailCart from "../Components/cart/detailCart/DetailCart";
import { useAuth } from "../zustand/authUsers";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import RutaPortegida from "./routePortect/RutaPortegida";

const AppRouter = () => {
  const { setUser, setIsAuthenticated } = useAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("useer dessde approuer",user)
        setUser(user);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, [setUser, setIsAuthenticated]);

  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Routes>
        <Route element={<LayoutComponent />}>
          {/* Ruta pública */}
          <Route path="/" element={<Home />} />

          {/* Ruta protegida */}
          <Route element={<RutaPortegida />}>
            <Route path="/productos" element={<Products />} />
            <Route
              path="/detalles-producto/:producto"
              element={<DetailProduct />}
            />
            <Route path="/carrito" element={<DetailCart />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
