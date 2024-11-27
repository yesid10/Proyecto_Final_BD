import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
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
import Cart from "../cart/Cart";
import { useProduct } from "../../zustand/useProducts";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [openCart, setOpenCart] = React.useState(false);

  const {totalPrice} = useProduct();

  const [isOpen, setIsOpen] = useState();

  const navigate = useNavigate();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleOpenSingIn = () => setOpen((cur) => !cur);
  const handleOpenCart = () => setOpenCart(!openCart);

  const handleNavigateHome = () => {
    navigate("/");
  };
  const navigatePages = (pages) => {
    if (typeof pages === "string") {
      const pageNoUppercase = pages.toLowerCase();
      console.log(pageNoUppercase);
      navigate(pageNoUppercase);
    } else {
      console.error("El parámetro 'pages' no es una cadena de texto");
    }
  };

  const navigationPages = [
    {
      id: 1,
      page: "HOME",
      icon: <MdOutlineArrowDropDown />,
    },
    {
      id: 2,
      page: "PRODUCTOS",
      icon: <MdOutlineArrowDropDown />,
    },
    {
      id: 3,
      page: "CARRITO",
      icon: <MdOutlineArrowDropDown />,
    },
    {
      id: 4,
      page: "CONTACTO",
      icon: <MdOutlineArrowDropDown />,
    },
  ];

  return (
    <div>
      <div className="bg-primary_color justify-around items-center py-1 sm:flex hidden">
        <div>
          <span className="text-white  text-sm text-ellipsis">
            Haga sus pedidos en linea o llámanos:
            <a
              href="tel:+573118599554"
              className="font-semibold ml-2 underline"
            >
              (+57) 311 859 9554
            </a>
          </span>
        </div>
        <div className="text-white font-bold flex gap-6 items-center">
          <FaFacebookF className="cursor-pointer" />
          <FaXTwitter className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaGithub className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
        </div>
      </div>

      <div className="flex justify-center gap-[10%] items-center my-7">
        <div className="flex sm:hidden items-center justify-start">
          <div className="group flex h-20 w-20 cursor-pointer items-center justify-center rounded-3xl bg-white p-2 hover:bg-slate-200">
            <div className="space-y-2">
              <span className="block h-1 w-10 origin-center rounded-full bg-primary_color transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
              <span className="block h-1 w-8 origin-center rounded-full bg-secondary_color transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
              <span className="block h-1 w-6 origin-center rounded-full bg-primary_color transition-transform ease-in-out group-hover:hidden"></span>
            </div>
          </div>
        </div>

        <div className="sm:flex hidden items-center  gap-[8%] ">
          <svg
            width="253.56"
            height="93.294"
            className="looka-1j8o68f cursor-pointer"
            viewBox="0 0 350 128.778"
            onClick={() => handleNavigateHome()}
          >
            <g
              xmlns="http://www.w3.org/2000/svg"
              id="SvgjsG3445"
              fill="#2d4059"
            >
              <path d="M124 41.84s13.307-8.16 18.203-10.043 7.783-2.887 12.554-6.528c4.896-3.766 11.047-11.424 13.181-13.056 2.134-1.506 2.134-1.004 6.152-2.385 5.021-1.758 11.926-12.303 14.562-9.29 1.507 1.883 5.524 13.433 7.281 8.662.754-2.008 2.386-5.272 4.018-4.017 1.757 1.38 1.38 1.13 3.138 7.532 1.757 6.403 2.51 6.026 4.77 8.286 2.386 2.134.628 1.13 3.139 6.151 2.636 5.022 7.783 10.67 9.666 13.684 1.256 2.26 2.26 4.017 2.637 4.645-5.524-1.758-15.944-4.77-27.995-6.78-1.13-2.134-1.256-5.649-1.507-6.904-1.004-5.022-7.532-3.515-5.272-7.658.753-1.632 11.172-11.173 7.657-10.67-2.134.376-5.9 1.13-6.653 1.506-10.67 4.52 2.51-10.545-8.286-5.9-1.004.502-3.891 0-5.649 1.883-1.632 1.883-3.892-.377-5.9 1.883s-.753 3.264-4.017 5.9c-3.139 2.636-3.013 2.762-5.775 4.645-2.636 1.883-3.013 4.52-5.398 5.398-2.26.879-6.654 3.013-8.16 3.013-1.632 0-7.91 3.766-8.662 4.52-.628.878-13.684 5.523-13.684 5.523"></path>
              <path d="M128.394 44.727s26.614-7.155 50.968-5.398c24.23 1.758 47.58 10.169 47.58 10.169l-9.04 2.385c-19.583-7.407-39.795-9.666-39.795-9.666s19.333 6.151 30.506 12.177l-15.19 3.891s-15.693-9.415-26.238-12.428c-10.42-3.013-38.791-1.13-38.791-1.13"></path>
            </g>
            <path
              id="SvgjsG3446"
              fill="#2d4059"
              d="m7.52 20-3.7-8.18V20H.84V6.3h3.72l4.02 9.06L12.6 6.3h3.72V20h-3.04v-8.22L9.56 20zm18.18-5.1-1.78-5.36-1.78 5.36zm1.7 5.1-.78-2.36h-5.38L20.46 20h-3.18l4.84-13.7h3.8L30.74 20zm12.8 0-5.52-8.68V20H31.7V6.3h3.38L40.6 15V6.3h2.98V20zm12 .28c-4 0-7.26-3.06-7.26-7.12 0-4.08 3.26-7.14 7.26-7.14 4.1 0 7.26 3.06 7.26 7.12 0 4.08-3.16 7.14-7.26 7.14m0-2.88c2.32 0 4.1-1.84 4.1-4.26 0-2.38-1.78-4.24-4.1-4.24s-4.1 1.86-4.1 4.26 1.78 4.24 4.1 4.24m13.6 2.86c-3.46 0-5.36-1.72-5.54-4.54h3.1c.06 1.04.66 2.08 2.52 2.08 1.56 0 2.36-.62 2.36-1.48 0-1.06-1.34-1.34-2.9-1.68-2.18-.52-4.84-1.16-4.84-4.42 0-2.4 1.86-4.18 5.14-4.18 3.34 0 5.18 1.82 5.38 4.5H67.9c-.06-1.1-.66-1.98-2.34-1.98-1.24 0-2.06.5-2.06 1.4 0 1.16 1.36 1.48 2.92 1.84 2.24.5 4.92 1.06 4.92 4.14 0 2.5-1.96 4.32-5.54 4.32M76.52 20V6.3h5.6c4.22 0 6.98 3 6.98 6.78 0 3.86-2.88 6.92-7.14 6.92zm5.44-10.86h-2.34v8.02h2.44c2.22 0 3.92-1.72 3.92-4.04 0-2.28-1.7-3.98-4.02-3.98M90.46 20V6.3h10.02v2.8h-6.92v2.58h6.4v2.72h-6.4v2.8h6.94V20zm24.26 0v-5.36h-5.8V20h-3.1V6.3h3.1v5.5h5.8V6.3h3.1V20zm7.88 0h-3.1V6.3h3.1zm6.64.26c-3.46 0-5.36-1.72-5.54-4.54h3.1c.06 1.04.66 2.08 2.52 2.08 1.56 0 2.36-.62 2.36-1.48 0-1.06-1.34-1.34-2.9-1.68-2.18-.52-4.84-1.16-4.84-4.42 0-2.4 1.86-4.18 5.14-4.18 3.34 0 5.18 1.82 5.38 4.5h-3.12c-.06-1.1-.66-1.98-2.34-1.98-1.24 0-2.06.5-2.06 1.4 0 1.16 1.36 1.48 2.92 1.84 2.24.5 4.92 1.06 4.92 4.14 0 2.5-1.96 4.32-5.54 4.32m13.42-.26h-3.1V9.14h-4.08V6.3h11.26v2.84h-4.08zm12.16.28c-4 0-7.26-3.06-7.26-7.12 0-4.08 3.26-7.14 7.26-7.14 4.1 0 7.26 3.06 7.26 7.12 0 4.08-3.16 7.14-7.26 7.14m0-2.88c2.32 0 4.1-1.84 4.1-4.26 0-2.38-1.78-4.24-4.1-4.24s-4.1 1.86-4.1 4.26 1.78 4.24 4.1 4.24m14-8.26h-2.28v3.66h2.18c1.34 0 2.16-.76 2.16-1.82s-.68-1.84-2.06-1.84m-2.28 6.2V20h-3.1V6.3h5.84c2.92 0 4.72 1.88 4.72 4.56 0 2.14-1.42 3.92-3.74 4.38l4.36 4.76h-4.04zm12.3 4.66h-3.1V6.3h3.1zm9.36-5.1-1.78-5.36-1.78 5.36zm1.7 5.1-.78-2.36h-5.38l-.78 2.36h-3.18l4.84-13.7h3.8l4.82 13.7z"
              transform="matrix(1.81913 0 0 1.81913 -1.528 67.049)"
            ></path>
            <path
              id="SvgjsG3447"
              fill="#2d4059"
              d="M1.14 13c0-4.04 3.18-7.2 7.18-7.2 1.68 0 3.28.56 4.7 1.64l-.9 1.4c-1.18-.9-2.4-1.34-3.8-1.34-3.02 0-5.38 2.42-5.38 5.5s2.38 5.5 5.38 5.5c1.52 0 2.82-.48 3.8-1.42l.92 1.38c-1.22 1.1-2.94 1.74-4.72 1.74-4 0-7.18-3.18-7.18-7.2m16.907 1.46V6h1.8v8.32c0 2.7 1.56 4.08 3.76 4.08s3.78-1.38 3.78-4.08V6h1.78v8.46c0 3.64-2.08 5.74-5.56 5.74-3.46 0-5.56-2.1-5.56-5.74M34.414 13c0-4.04 3.18-7.2 7.18-7.2 1.68 0 3.28.56 4.7 1.64l-.9 1.4c-1.18-.9-2.4-1.34-3.8-1.34-3.02 0-5.38 2.42-5.38 5.5s2.38 5.5 5.38 5.5c1.52 0 2.82-.48 3.8-1.42l.92 1.38c-1.22 1.1-2.94 1.74-4.72 1.74-4 0-7.18-3.18-7.18-7.2m26.247 7-1.22-2.84h-6.24L51.981 20h-1.92l6.16-14.2h.2l6.16 14.2zm-6.74-4.52h4.8l-2.4-5.54zM67.128 20V6h1.8v14zM83.595 7.72h-4.08V20h-1.8V7.72h-4.1l.12-1.72h9.74zM97.522 20l-1.22-2.84h-6.24L88.842 20h-1.92l6.16-14.2h.2l6.16 14.2zm-6.74-4.52h4.8l-2.4-5.54z"
              transform="matrix(1.02625 0 0 1.02625 123.83 108.048)"
            ></path>
          </svg>
          <div className="flex">
            <select className="border-2 rounded-sm py-2" name="" id="">
              <option value="">Colecciones</option>
              <option value="">PC</option>
              <option value="">Celulares</option>
              <option value="">PC</option>
              <option value="">Celulares</option>
              <option value="">PC</option>
              <option value="">Celulares</option>
              <option value="">PC</option>
              <option value="">Celulares</option>
              <option value="">PC</option>
            </select>
            <input
              className=" w-[100%] border-2 py-2 pr-60 focus:outline-none focus:border-primary_color focus:ring-primary_color"
              type="text"
              placeholder="Buscar colección"
            />
            <button className="flex px-3 items-center border justify-center bg-primary_color">
              <FaSearch className="text-white font-semibold" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <GoHeart className="text-3xl sm:flex hidden cursor-pointer" />
          <FaUserAlt
            onClick={handleOpenSingIn}
            className="text-2xl sm:flex hidden cursor-pointer"
          />
          <Dialog
            size="xs"
            open={open}
            handler={handleOpenSingIn}
            className="bg-transparent shadow-none"
          >
            <Card className="mx-auto w-full max-w-[24rem]">
              <CardBody className="flex flex-col gap-4">
                <Typography variant="h4" color="blue-gray">
                  Sign In
                </Typography>
                <Typography
                  className="mb-3 font-normal"
                  variant="paragraph"
                  color="gray"
                >
                  Enter your email and password to Sign In.
                </Typography>
                <Typography className="-mb-2" variant="h6">
                  Your Email
                </Typography>
                <Input label="Email" size="lg" />
                <Typography className="-mb-2" variant="h6">
                  Your Password
                </Typography>
                <Input label="Password" size="lg" />
                <div className="-ml-2.5 -mt-3">
                  <Checkbox label="Remember Me" />
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Button variant="gradient" onClick={handleOpenSingIn} fullWidth>
                  Sign In
                </Button>
                <Typography
                  variant="small"
                  className="mt-4 flex justify-center"
                >
                  Don&apos;t have an account?
                  <Typography
                    as="a"
                    href="#signup"
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                    onClick={handleOpenSingIn}
                  >
                    Sign up
                  </Typography>
                </Typography>
              </CardFooter>
            </Card>
          </Dialog>
          <div
            onClick={handleOpenCart}
            variant="gradient"
            className=" gap-1 items-center justify-center cursor-pointer"
          >
            <CiShoppingCart className="text-3xl " />
             <Cart handleOpenCart={handleOpenCart} openCart={openCart}/>
            <span className="sm:flex hidden text-primary_color font-semibold">$ {totalPrice}</span>
          </div>
        </div>
      </div>

      <div className="sm:flex hidden bg-secondary_color text-white py-5">
        <ul className="flex w-screen font-semibold justify-center gap-[9.5%]">
          <li className="flex text-colo_text text-sm font-light  hover:font-medium transition-all duration-500 justify-center items-center gap-4 cursor-pointer">
            <CiMenuFries /> COLECCIONES
          </li>
          {navigationPages.map((item) => (
            <li
              onClick={() => navigatePages(item.page)}
              className="flex text-colo_text text-sm font-light  hover:font-medium transition-all duration-500 justify-center items-center gap-4 cursor-pointer"
              key={item.id}
            >
              {item.page}
              {item.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
