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

const Cart = ({ openCart, handleOpenCart }) => {
  // const [openCart, setOpenCart] = React.useState(false);
  // const handleOpenCart = () => setOpenCart(!openCart);

  const handleNavigateToCart = () => {
    console.log("desde cart");
  };

  const { cart, cantidadComprar, totalPrice, setPriceTotal } = useProduct();


  const precioTotal = cart?.reduce(
    (sum, item) => sum + item.precio * item.quantity,
    0
  );

  useEffect(() => {
    setPriceTotal(precioTotal);
  }, [cart, setPriceTotal]);

  return (
    <Dialog
      aria-hidden={false}
      size="sm"
      open={openCart}
      handler={handleOpenCart}
      className="absolute flex flex-col justify-between right-0 h-screen rounded-none"
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
                  <span className="">
                    Cantidad {item.quantity}
                  </span>
                  <span className="">$ {item.precio}</span>
                </div>
              </div>
              
              <button className="text-red-300 hover:bg-red-100 py-1 px-1 rounded-lg transition-all duration-150"><IoClose className=""/></button>
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
        <Button className="w-4/5 bg-titles_color hover:scale-110 transition-all duration-300" onClick={() => handleNavigateToCart()}>
          <span>Ir a pagar</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default Cart;
