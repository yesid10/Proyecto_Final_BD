import React, { useEffect } from "react";
import { useProduct } from "../../zustand/useProducts.js";
import { Link } from "react-router-dom";
import { useAuth } from "../../zustand/authUsers.js";

const Products = () => {
  const { productos, functionGet, setProductSelected } = useProduct();

  const { dataSinIn } = useAuth();

  const handleDetailProductId = (producto) => {
    setProductSelected(producto);
  };

  useEffect(() => {
    functionGet("list");
  }, [functionGet]);
  // const products = [
  //     {
  //       id: 1,
  //       name: 'Earthen Bottle',
  //       href: '#',
  //       price: '$48',
  //       imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
  //       imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  //     },
  //     {
  //       id: 2,
  //       name: 'Nomad Tumbler',
  //       href: '#',
  //       price: '$35',
  //       imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
  //       imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  //     },
  //     {
  //       id: 3,
  //       name: 'Focus Paper Refill',
  //       href: '#',
  //       price: '$89',
  //       imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg',
  //       imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  //     },
  //     {
  //       id: 4,
  //       name: 'Machined Mechanical Pencil',
  //       href: '#',
  //       price: '$35',
  //       imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
  //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  //     },
  //     // More products...
  //   ]

  return (
    <>
      {dataSinIn?.rol === "ADMIN" && (
        <div className="flex my-5 mr-[11%] justify-end items-center ">
          <button className="px-3 flex items-center rounded-lg text-gray-300 font-medium hover:scale-95 transition-all duration-300 justify-center py-3 bg-primary_color">
            Agregar producto
          </button>
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
