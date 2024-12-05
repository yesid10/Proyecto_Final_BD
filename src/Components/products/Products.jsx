import React, { useEffect } from "react";
import { useProduct } from "../../zustand/useProducts.js";
import { Link } from "react-router-dom";
import { useAuth } from "../../zustand/authUsers.js";
import { MdDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";

const Products = () => {
  const { productos, functionGet, setProductSelected, functionGetProducts, removeFromProducts } =
    useProduct();

  const { dataSinIn } = useAuth();

  const handleDetailProductId = (producto) => {
    setProductSelected(producto);
  };

  useEffect(() => {
    // functionGetProducts()
    functionGet("list");
  }, []);

  const handleDeleteProduct = (productoId) => {
    removeFromProducts(productoId);
  };

  return (
    <>
      {dataSinIn?.rol === "ADMIN" && (
        <div className="flex my-5 mr-[11%] justify-end items-center ">
          <Link
            to="/add-product"
            className="px-3 flex items-center rounded-lg text-gray-300 font-medium hover:scale-95 transition-all duration-300 justify-center py-3 bg-primary_color"
          >
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
                {dataSinIn?.rol === "ADMIN" && (
                  <div className="absolute z-50 opacity-0 group-hover:opacity-100 transition-all duration-500 mx-[6.5%] my-[8%] flex gap-5">
                    <MdDelete onClick={() => handleDeleteProduct(product.productoId)} className="text-2xl text-red-500 hover:text-red-900 transition-all duration-500" />
                    <BiEditAlt className="text-2xl text-green-400 hover:text-green-800 transition-all duration-500" />
                  </div>
                )}

                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.nombre}
                    src={product.imagen_url}
                    className=" w-full object-contain object-center group-hover:opacity-15"
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
