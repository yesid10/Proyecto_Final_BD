import React from "react";
import { useProduct } from "../../../zustand/useProducts";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const DetailCart = () => {
  const {
    cart,
    totalPrice,
    setPriceTotal,
    loadCart,
    removeFromCart,
    clearCart,
  } = useProduct();

  
  return (
    <div className="my-10 mb-20">
      <div className="flex w-2/12  justify-center items-center mx-[15%] text-[150%] py-5 my-5 rounded-xl text-colo_text border-2 cursor-pointer">
        Carrito
      </div>
      <div className="overflow-x-auto flex w-full justify-center">
        <table className="table-auto w-11/12 border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-primary_color">
              <th className="px-4 py-2 text-left text-sm font-medium"></th>
              <th className=" px-4 py-2 text-left text-sm font-medium">
                Producto
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium">
                Precio
              </th>
              <th className=" px-4 py-2 text-left text-sm font-medium">
                Cantidad
              </th>
              <th className="  px-4 py-2 text-left text-sm font-medium">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item) => (
              <tr
                className="hover:bg-gray-50  text-colo_text"
                key={item.productoId}
              >
                <td className="border-b px-4 py-2 text-sm">
                  <div className="flex items-center gap-8">
                    <IoClose
                      onClick={() => removeFromCart(item.productoId)}
                      className="text-red-500 hover:bg-red-100 rounded-sm transition-all cursor-pointer"
                    />
                    <img
                      className="w-16 h-16 cursor-pointer object-cover rounded-md"
                      src={item.imagen_url}
                      alt={item.nombre}
                    />
                  </div>
                </td>
                <td className="border-b px-4 py-2 text-sm">
                  <span>{item.nombre}</span>
                </td>
                <td className="border-b px-4 py-2 text-sm">
                  <span>{item.precio}</span>
                </td>
                <td className="border-b px-4 py-2 text-sm">
                  <span>{item.quantity}</span>
                </td>
                <td className="border-b px-4 py-2 text-sm">
                  <span>{totalPrice}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex w-full justify-center mt-20">
        <div className="flex flex-col px-10 py-10 w-11/12 border">
          <span>Totales</span>
          <div className="flex w-full justify-between">
            <div className="flex flex-col text-colo_text font-medium justify-center">
              <span>Subtotal</span>
              <span>Envío</span>
              <span>Total</span>
            </div>
            <div className="flex flex-col text-titles_color font-medium">
              <span>$ {totalPrice}</span>
              <span>$ 15000</span>
              <span>$ {totalPrice + 15000}</span>
            </div>
          </div>
          <Link
            to={"/finalizar-compra"}
            className="bg-primary_color text-center text-gray-300 text-lg hover:scale-95 transition-all duration-500 font-medium py-3 mt-7 rounded-lg"
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailCart;
