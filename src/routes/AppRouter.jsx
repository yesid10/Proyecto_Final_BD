import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Products from "../Components/products/Products";
import LayoutComponent from "../Components/Layout/LayoutComponent";
import DetailProduct from "../Components/products/detailsProducts/DetailProduct";
import DetailCart from "../Components/cart/detailCart/DetailCart";
import { useAuth } from "../zustand/authUsers";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import RutaPortegida from "./routePortect/RutaPortegida";
import AgregarProducto from "../Components/addProductos/AgregarProducto";
import AccesoDenet from "../Components/accesoDenegado/AccesoDenet";
import AdminPage from "../Components/admin/AdminPage";
import Contact from "../pages/Contact";
import ArtesanosPage from "../pages/ArtesanosPage";

const AppRouter = () => {
  const { setUser, setIsAuthenticated } = useAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("useer dessde approuer",user)
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
          <Route path="/home" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/artesanos" element={<ArtesanosPage/>}/>
          {/* <Route path="/acceso-denegado" element={<AccesoDenet/>}/> */}

          {/* Ruta protegida */}
          <Route element={<RutaPortegida />}>
            <Route
              path="/detalles-producto/:producto"
              element={<DetailProduct />}
            />
            <Route path="/carrito" element={<DetailCart />} />
            <Route path="/add-product" element={<AgregarProducto />} />
          </Route>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
