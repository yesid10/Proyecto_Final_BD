import React, { useState } from "react";
import { useProduct } from "../../../zustand/useProducts";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const CounterCart = () => {


    const { productSelected, addCart, setCantidadComprar, cantidadComprar } = useProduct();
    const { stock } = productSelected;
    // const [cantidadComprar, setCantidadComprar] = useState(0);
    console.log(cantidadComprar)
    
  const incrementQuantity = () => {
    setCantidadComprar(cantidadComprar + 1);
  };

  const decrementQuantity = () => {
    setCantidadComprar(cantidadComprar > 1 ? cantidadComprar - 1 : 1);
  };
  return (
    <>
      {cantidadComprar < stock ? (
        <div className="flex border py-1 rounded-md px-4 justify-center items-center flex-col">
          <span>Cantidad</span>
          <div className="flex text-colo_text gap-4 justify-center items-center">
            <CiCirclePlus
              onClick={() => incrementQuantity()}
              className="text-3xl cursor-pointer "
            />
            {cantidadComprar}
            <CiCircleMinus
              onClick={() => decrementQuantity()}
              className="text-3xl cursor-pointer"
            />
          </div>
        </div>
      ) : (
        <span className="flex justify-center items-center text-red-300">
          Productos agotados 😥
        </span>
      )}
    </>
  );
};

export default CounterCart;
