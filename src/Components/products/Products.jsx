import React, { useEffect } from "react";
import { useProduct } from "../../zustand/useProducts.js";
import { Link } from "react-router-dom";
import { useAuth } from "../../zustand/authUsers.js";

const Products = () => {
  const { productos, functionGet, setProductSelected, functionGetProducts } = useProduct();

  const { dataSinIn } = useAuth();

  const handleDetailProductId = (producto) => {
    setProductSelected(producto);
  };

  useEffect(() => {
    functionGetProducts();
  }, []);

  return (
    <>
      {dataSinIn?.rol === "ADMIN" && (
        <div className="flex my-5 mr-[11%] justify-end items-center ">
          <Link to="/add-product" className="px-3 flex items-center rounded-lg text-gray-300 font-medium hover:scale-95 transition-all duration-300 justify-center py-3 bg-primary_color">
            Agregar producto
          </Link>
        </div>
      )}

      <div className="bg-secondary_color mt-10">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {productos.map((product) => (
              <Link
                key={product.productoId}
                to={`/detalles-producto/${product.nombre}`}
                className="group cursor-pointer"
                onClick={() => handleDetailProductId(product)}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.nombre}
                    src={product.imagen_url}
                    className=" w-full object-contain object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-colo_text">
                  {product.nombre}
                </h3>
                <p className="mt-1 text-lg font-medium text-titles_color">
                  $ {product.precio}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
