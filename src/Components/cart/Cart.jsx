import React from 'react'
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
import { useProduct } from '../../zustand/useProducts';

const Cart = ({openCart, handleOpenCart}) => {
    // const [openCart, setOpenCart] = React.useState(false);
    // const handleOpenCart = () => setOpenCart(!openCart);

    const { cart } = useProduct();

    console.log("Cart en cart",cart)

    return (
        <Dialog
            aria-hidden={false}
            size="xs"
            open={openCart}
            handler={handleOpenCart}

            className="absolute right-0 h-screen rounded-none"
        >
            <Button
                variant="text"
                color="red"
                onClick={handleOpenCart}
                className="mr-1 text-2xl"
            >
                <IoClose />
            </Button>
            <DialogHeader>
                {cart.map((item) => (
                    <div key={item.productoId} className='flex justify-center items-center gap-10'>
                        <img src={item.imagen_url} alt={item.nombre} className='w-4/12 rounded-xl' />
                        <div>
                            <span>{item.nombre}</span>

                        </div>
                    </div>
                )) }
            </DialogHeader>
            
            <DialogFooter>
                <Button
                    variant="gradient"
                    color="green"
                    onClick={handleOpenCart}
                >
                    <span>Confirm</span>
                </Button>
            </DialogFooter>
        </Dialog>
    )
}

export default Cart