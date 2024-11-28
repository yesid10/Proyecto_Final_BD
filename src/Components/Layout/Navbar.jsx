import React, { useEffect, useState } from "react";
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
} from "@material-tailwind/react";
import Cart from "../cart/Cart";
import { useProduct } from "../../zustand/useProducts";
import LogoPage from "../logo/LogoPage";
import { useAuth } from "../../zustand/authUsers";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [openCart, setOpenCart] = React.useState(false);

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
  // console.log("data sing in", dataSinIn);
  // console.log(usuarios);

  // const [isOpen, setIsOpen] = useState();

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

  //Validación de formularios
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {;
    handleOpenSingIn(); //Cerra modal
    loginWithEmailAndPasswordDb(data);
    
    const user = usuarios.find(
      (u) => u.email === data.email && u.password === data.password
    );
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
        text: "Something went wrong!",
      });
    }
  };

  // Validacion de usuarios
 

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
          <LogoPage />
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
        <div className="flex items-center gap-8">
          <GoHeart className="text-3xl sm:flex hidden cursor-pointer" />
          {user || dataSinIn ? (
            <div className="flex cursor-pointer flex-col group justify-center items-center">
              <img
                className="w-12 h-12 rounded-full"
                src={user?.photoURL ? user?.photoURL : dataSinIn.imageUrl}
                alt=""
              />
              <span className="text-colo_text">
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
              className="text-2xl sm:flex hidden cursor-pointer"
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
            <CiShoppingCart className="text-3xl " />
            <Cart handleOpenCart={handleOpenCart} openCart={openCart} />
            <span className="sm:flex hidden text-primary_color font-semibold">
              $ {totalPrice === 0 ? "0.00" : totalPrice}
            </span>
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
