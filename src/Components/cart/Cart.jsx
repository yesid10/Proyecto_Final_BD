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

const Cart = ({openCart, handleOpenCart}) => {
    // const [openCart, setOpenCart] = React.useState(false);
    // const handleOpenCart = () => setOpenCart(!openCart);


    return (
        <Dialog
            aria-hidden={true}
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
            <DialogHeader>Its a simple modal.</DialogHeader>
            <DialogBody>
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty
                five years of blood sweat and tears, and I&apos;m never giving
                up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
            </DialogBody>
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