import React from "react";
import { useProduct } from "../../../zustand/useProducts";
import { IoClose } from "react-icons/io5";

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
    <div>
      <div className="flex w-2/12  justify-center items-center mx-[15%] text-5xl py-5 my-5 rounded-xl text-colo_text border-2 cursor-pointer">
        Carrito
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full  border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700"></th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                Producto
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                Precio
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                Cantidad
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item) => (
              <tr className="hover:bg-gray-50" key={item.productoId}>
                <td className="border items-center gap-5 flex border-gray-300 px-4 py-2 text-sm text-gray-600">
                  <IoClose />
                  <img
                    className="w-1/12"
                    src={item.imagen_url}
                    alt={item.nombre}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                  <span>{item.nombre}</span>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                  <span>{item.precio}</span>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                  <span>{item.quantity}</span>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                  <span>{totalPrice}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailCart;
