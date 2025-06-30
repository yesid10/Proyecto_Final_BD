import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
} from "@material-tailwind/react";
import Cart from "../cart/Cart";
import { useProduct } from "../../zustand/useProducts";
import LogoPage from "../logo/LogoPage";
import { useAuth } from "../../zustand/authUsers";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { LiaPersonBoothSolid } from "react-icons/lia";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [openCart, setOpenCart] = React.useState(false);
  const location = useLocation();

  const { totalPrice } = useProduct();

  const {
    loginWithGoogle,
    user,
    logout,
    functionGetUsers,
    usuarios,
    dataSinIn,
    loginWithEmailAndPasswordDb,
  } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    functionGetUsers("list");
  }, [functionGetUsers]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleOpenSingIn = () => setOpen((cur) => !cur);
  const handleOpenCart = () => setOpenCart(!openCart);

  const navigatePages = (pages) => {
    if (typeof pages === "string") {
      const pageNoUppercase = pages.toLowerCase();
      console.log(pageNoUppercase);
      navigate(pageNoUppercase);
    } else {
      console.error("El parámetro 'pages' no es una cadena de texto");
    }
  };

  const handleClickedLoginWithGoogle = () => {
    handleOpenSingIn();
    loginWithGoogle();
  };
  const navigationPages = [
    {
      id: 1,
      page: "HOME",
      href: "home",
      icon: <MdOutlineArrowDropDown />,
    },
    {
      id: 2,
      page: "PRODUCTOS",
      href: "productos",
      icon: <MdOutlineArrowDropDown />,
    },
    {
      id: 3,
      page: "CARRITO",
      href: "carrito",
      icon: <MdOutlineArrowDropDown />,
    },
    {
      id: 4,
      page: "CONTACTO",
      href: "contact",
      icon: <MdOutlineArrowDropDown />,
    },
  ];

  //Validación de formularios
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    handleOpenSingIn(); //Cerra modal
    loginWithEmailAndPasswordDb(data);

    const user = usuarios.find(
      (u) => u.email === data.email && u.password === data.password
    );

    console.log("user desde navber", user);
    if (user) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });

      loginWithEmailAndPasswordDb(user);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario o contraseña incorrectos",
      });

      loginWithEmailAndPasswordDb(null);
    }
    reset();
  };

  const [selectedRegion, setSelectedRegion] = useState("Europe");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (value) => {
    setSelectedRegion(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Validacion de usuarios

  return (
    <div className="bg-primary_color sticky top-0 w-full z-50 shadow-lg">
      <div className="justify-around items-center py-1 sm:flex hidden">
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

      <div className="flex justify-center gap-[10%] items-center ">
        <div className="flex sm:hidden items-center justify-start">
          <div className="group flex h-20 w-20 cursor-pointer items-center justify-center rounded-3xl bg-white p-2 hover:bg-slate-200">
            <div className="space-y-2">
              <span className="block h-1 w-10 origin-center rounded-full bg-primary_color transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
              <span className="block h-1 w-8 origin-center rounded-full bg-primary_color transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
              <span className="block h-1 w-6 origin-center rounded-full bg-primary_color transition-transform ease-in-out group-hover:hidden"></span>
            </div>
          </div>
        </div>

        <div className="sm:flex hidden items-center  gap-[8%] ">
          <LogoPage />
          <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative mt-2" ref={dropdownRef}>
              <div className="absolute top-1 left-1 flex items-center">
                <button
                  onClick={toggleDropdown}
                  className="rounded border border-transparent py-1 px-1.5 text-center flex items-center text-sm transition-all text-slate-600"
                >
                  <span className="text-ellipsis overflow-hidden">
                    {selectedRegion}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <div className="h-6 border-l border-slate-200 ml-1"></div>

                {isOpen && (
                  <div className="min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 bg-white border border-slate-200 rounded-md shadow-lg z-10">
                    <ul>
                      {["Europe", "Australia", "Africa"].map((region) => (
                        <li
                          key={region}
                          className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer"
                          onClick={() => handleOptionClick(region)}
                        >
                          {region}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <input
                type="text"
                placeholder="Germany..."
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-12 pl-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              />

              <button
                className="absolute right-1 top-1 rounded bg-primary_color p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <GoHeart className="text-3xl sm:flex hidden text-gray-300 font-medium cursor-pointer" />
          {user || dataSinIn ? (
            <div className="flex cursor-pointer flex-col group justify-center items-center">
              <img
                className="w-12 h-12 rounded-full"
                src={user?.photoURL ? user?.photoURL : dataSinIn.imageUrl}
                alt=""
              />
              <span className="text-secondary_color">
                {user?.displayName ? user?.displayName : dataSinIn.nombre}
              </span>
              <button
                onClick={() => logout()}
                className="absolute bg-red-300 text-gray-100 px-4 font-medium py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-500 mt-28"
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <FaUserAlt
              onClick={handleOpenSingIn}
              className="text-2xl sm:flex hidden font-medium text-gray-300 cursor-pointer"
            />
          )}

          <Dialog
            size="xs"
            open={open}
            handler={handleOpenSingIn}
            className="bg-transparent shadow-none"
          >
            <Card className="mx-auto w-full max-w-[24rem]">
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardBody className="flex flex-col gap-4">
                  <Typography variant="h4" color="blue-gray">
                    Inicio de sesión
                  </Typography>
                  <Typography
                    className="mb-3 font-normal"
                    variant="paragraph"
                    color="gray"
                  >
                    Ingrese su correo y su contraseña.
                  </Typography>

                  {/* Email */}
                  <Typography className="-mb-2" variant="h6">
                    Email
                  </Typography>
                  <Input
                    label="Email"
                    size="lg"
                    {...register("email", {
                      required: "El correo es obligatorio",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Formato de correo inválido",
                      },
                    })}
                  />
                  {errors.email && (
                    <Typography variant="small" color="red">
                      {errors.email.message}
                    </Typography>
                  )}

                  {/* Contraseña */}
                  <Typography className="-mb-2" variant="h6">
                    Contraseña
                  </Typography>
                  <Input
                    label="Contraseña"
                    type="password"
                    size="lg"
                    {...register("password", {
                      required: "La contraseña es obligatoria",
                      minLength: {
                        value: 6,
                        message: "Debe tener al menos 6 caracteres",
                      },
                    })}
                  />
                  {errors.password && (
                    <Typography variant="small" color="red">
                      {errors.password.message}
                    </Typography>
                  )}

                  {/* Remember Me */}
                  <div className="-ml-2.5 -mt-3">
                    <Checkbox label="Remember Me" {...register("rememberMe")} />
                  </div>
                </CardBody>

                <CardFooter className="pt-0">
                  {/* Submit */}
                  <Button variant="gradient" fullWidth type="submit">
                    Sign In
                  </Button>

                  {/* Login con Google */}
                  <button
                    onClick={() => handleClickedLoginWithGoogle()}
                    className="flex bg-colo_text px-2 py-2 rounded-lg font-medium hover:scale-95 transition-all duration-300 text-gray-200 w-full justify-center items-center mt-5 gap-5"
                  >
                    <FcGoogle className="text-xl" /> Hazlo con Google
                  </button>

                  {/* Link para registrarse */}
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
              </form>
            </Card>
          </Dialog>
          <div
            onClick={handleOpenCart}
            variant="gradient"
            className=" flex flex-col gap-1 items-center justify-center cursor-pointer"
          >
            <CiShoppingCart className="text-3xl font-medium text-gray-300" />
            <Cart handleOpenCart={handleOpenCart} openCart={openCart} />
            <span className="sm:flex hidden text-secondary_color font-semibold">
              $ {totalPrice === 0 ? "0.00" : totalPrice}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:flex text-white">
        <ul className="flex bg-secondary_color rounded-lg px-8 py-4 font-semibold justify-center gap-20">
          <li
            className={`flex ${
              location.pathname === `/${"colecciones"}`
                ? "bg-colo_text text-secondary_color"
                : ""
            } text-colo_text text-sm font-semibold px-4 py-2 hover:font-medium rounded hover:bg-colo_text hover:text-secondary_color transition-all duration-500 justify-center items-center gap-4 cursor-pointer`}
          >
            <CiMenuFries /> COLECCIONES
          </li>

          {navigationPages.map((item) => (
            <li
              onClick={() => navigatePages(item.href)}
              className={`flex ${
                location.pathname === `/${item.href}`
                  ? "bg-colo_text text-secondary_color"
                  : ""
              } text-colo_text text-sm px-4 py-2 font-semibold rounded hover:bg-colo_text hover:text-secondary_color  hover:font-medium transition-all duration-300 justify-center items-center gap-4 cursor-pointer`}
              key={item.id}
            >
              {item.page}
              {item.icon}
            </li>
          ))}
          <Link
            to={"/artesanos"}
            className={`flex ${
              location.pathname === `/${"artesanos"}`
                ? "bg-colo_text text-secondary_color"
                : ""
            } text-colo_text text-sm font-semibold px-4 py-2 hover:font-medium rounded hover:bg-primary_color hover:text-secondary_color transition-all duration-500 justify-center items-center gap-4 cursor-pointer`}
          >
            <LiaPersonBoothSolid className="text-xl" /> ARTESANOS
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
