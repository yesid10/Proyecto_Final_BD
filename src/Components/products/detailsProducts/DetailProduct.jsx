import React, { useEffect, useState } from "react";
import { useProduct } from "../../../zustand/useProducts";

import Swal from "sweetalert2";
import CounterCart from "../../cart/counter/CounterCart";

const DetailProduct = () => {
  const { productSelected, addCart, cantidadComprar } = useProduct();
  const { productoId, description, imagen_url, nombre, precio, stock } =
    productSelected;

  const [position, setPosition] = useState({ x: "50%", y: "50%" });
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x: `${x}%`, y: `${y}%` });
  };

  const handleMouseEnter = () => setIsZoomed(true);
  const handleMouseLeave = () => {
    setIsZoomed(false);
    setPosition({ x: "50%", y: "50%" }); // Resetea la posición
  };

  return (
    <div className="w-full flex my-10 justify-center gap-[10%] items-start">
      {/* Imagen con zoom */}
      <div
        className="relative w-4/12 h-1/5 ml-16 overflow-hidden rounded-lg cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={imagen_url}
          alt={nombre}
          className={`w-full h-full object-contain rounded-lg transition-transform duration-300 ${
            isZoomed ? "scale-150" : "scale-100"
          }`}
          style={{
            transformOrigin: `${position.x} ${position.y}`,
          }}
        />
      </div>

      {/* Detalles del producto */}
      <div className="w-4/12 flex gap-y-5 pt-3 flex-col">
        <span className="text-colo_text">{stock} disponibles</span>
        <h1 className="text-titles_color text-5xl cursor-pointer">{nombre}</h1>
        <h3 className="text-colo_text text-lg font-medium">$ {precio}</h3>
        <p className="text-titles_color text-wrap">{description}</p>
        <span className="text-colo_text">Material: Lana de oveja</span>
        <span className="text-colo_text">Color: Blanco con pintas negras</span>
        <span className="text-colo_text">REF: TA1719003</span>

        <div className="flex w-full justify-start gap-[10%]">
          <button
            disabled={productSelected.stock > 0 ? false : true}
            onClick={() => addCart(productSelected, cantidadComprar)}
            className={`bg-primary_color text-gray-200 opacity-${
              productSelected.stock > 0 ? "100" : "30"
            } hover:font-medium transition-all ease-in-out duration-300 text-lg rounded-lg w-3/4 px-4 py-5 text-center`}
          >
            Agregar al carrito
          </button>
          <CounterCart/>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
