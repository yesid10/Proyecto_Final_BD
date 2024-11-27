import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useProduct } from "../../zustand/useProducts";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import CounterCart from "./counter/CounterCart";

const Cart = ({ openCart, handleOpenCart }) => {
  // const [openCart, setOpenCart] = React.useState(false);
  // const handleOpenCart = () => setOpenCart(!openCart);
    const navigate = useNavigate()

  const handleNavigateToCart = () => {
    navigate("/carrito")
  };

  const { cart, totalPrice, setPriceTotal, loadCart, removeFromCart, clearCart } =
    useProduct();

    console.log(cart)
  const precioTotal = cart?.reduce(
    (sum, item) => sum + item.precio * item.quantity,
    0
  );

  useEffect(() => {
    setPriceTotal(precioTotal);
  }, [cart, setPriceTotal, loadCart]);

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  return (
    <Dialog
      aria-hidden={false}
      size="sm"
      open={openCart}
      handler={handleOpenCart}
      className="absolute flex flex-col  justify-between right-0 h-screen rounded-none"
    >
      <DialogHeader className="flex flex-col   mt-10">
        {cart?.length > 0 ? (
          cart?.map((item) => (
            <div
              key={item.productoId}
              className="flex w-full border-b-2 border-t-2 py-5 justify-center items-center gap-10"
            >
              <img
                src={item.imagen_url}
                alt={item.nombre}
                className="w-3/12 rounded-sm"
              />
              <div className="flex flex-col text-lg w-full justify-between font-light italic">
                <span className="text-titles_color font-medium">
                  {item.nombre}
                </span>
                <div className="flex w-full justify-between text-primary_color">
                  <span className="">Cantidad <span className="text-colo_text font-medium">{item.quantity}</span></span>
                  {/* <CounterCart/> */}
                  <span className="">$ {item.precio}</span>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.productoId)}
                className="text-red-300 hover:bg-red-100 py-1 px-1 rounded-lg transition-all duration-150"
              >
                <IoClose className="" />
              </button>
            </div>
          ))
        ) : (
          <span>Carrito vacío 😕</span>
        )}
      </DialogHeader>

      <DialogFooter className="flex gap-y-5 flex-col border-t-2">
        <div className="flex w-full justify-between">
          <span className="text-2xl font-medium text-colo_text">Total: </span>
          <span className="text-2xl font-normal ">{totalPrice}</span>
        </div>
        <div className="flex w-full gap-5">
          <Button
            className="w-4/5 bg-titles_color hover:scale-95 transition-all duration-300"
            onClick={() => handleNavigateToCart()}
          >
            <span>Ir a pagar</span>
          </Button>
          <button onClick={() => clearCart()} className="flex w-2/6 hover:scale-95 rounded-lg text-titles_color font-semibold text-center items-center justify-center bg-red-300 hover:bg-red-400 transition-all duration-200">
            Limpiar carrito
          </button>
        </div>
      </DialogFooter>
    </Dialog>
  );
};

export default Cart;
