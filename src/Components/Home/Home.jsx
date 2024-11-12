import React from "react";
import {
  Carousel,
  Typography,
  Button
} from "@material-tailwind/react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { GiSmartphone } from "react-icons/gi";
import { IoIosTabletPortrait } from "react-icons/io";
import { IoIosLaptop } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsCamera } from "react-icons/bs";
import { IoTvOutline } from "react-icons/io5";
import Elements from "./typesElements/Elements";



const Home = () => {

  const elements = [
    {
      id: 1,
      name: 'Smartphone',
      icon: <GiSmartphone className="text-2xl" />
    },
    {
      id: 2,
      name: 'Tablet',
      icon: <IoIosTabletPortrait className="text-2xl"/>
    },
    {
      id: 3,
      name: 'Laptop',
      icon: <IoIosLaptop className="text-2xl"/>
    },
    {
      id: 4,
      name: 'Accesorios',
      icon: <TfiHeadphoneAlt className="text-2xl"/>
    },
    {
      id: 5,
      name: 'Cámara',
      icon: <BsCamera className="text-2xl" />
    },
    {
      id: 6,
      name: 'TV',
      icon: <IoTvOutline className="text-2xl"/>
    }
  ]

  return (
    <div className="flex flex-col items-center justify-center mt-4 ">
      {/* Carousel */}
      <Carousel
        loop="true"
        autoplay="true"
        transition={{ duration: 2 }}
        className="group rounded-xl w-9/12 h-[80vh] cursor-pointer"
        prevArrow={({ handlePrev }) => (
          <GrFormPrevious
            onClick={handlePrev}
            className="text-3xl text-gray-300  w-[3.5%] h-[6%] !absolute  rounded-md bg-opacity-80
             bg-secondary_color top-2/4 left-4 -translate-y-2/4 opacity-0 group-hover:opacity-100 transition-opacity"
          />
        )}
        nextArrow={({ handleNext }) => (
          <GrFormNext
            onClick={handleNext}
            className="!absolute text-3xl w-[3.5%] h-[6%] text-gray-300 rounded-md bg-secondary_color bg-opacity-80
             top-2/4 !right-4 -translate-y-2/4  opacity-0 group-hover:opacity-100 transition-opacity"
          />
        )}
      >
        <div className="h-full flex justify-start items-center w-full overflow-hidden">
          <img
            src="//digital-world-4.myshopify.com/cdn/shop/files/slideshow2-home4_1920x.jpg?v=1613501343"
            alt="image 1"
            className="h-full w-full hover:scale-110 hover:w-screen transition-all duration-500 ease-in-out"
          />
          <div className="absolute ml-10 w-3/4 md:w-2/4">
            <Typography className="uppercase text-gray-600 font-semibold">
              El mejor vendido
            </Typography>
            <Typography variant="h1" className="font-bold">
              Microsoft Surface Pro 4
            </Typography>
            <Typography className="text-gray-600 font-normal">
              ¡Nuestro PC más vendido! Rendimiento, velocidad y diseño a un
              precio imbatible. Descubre por qué es la elección favorita de
              nuestros clientes.
            </Typography>
            <div className="flex mt-6">
              <Button className="bg-secondary_color rounded-none font-bold">
                Comprar ahora
              </Button>
            </div>
          </div>
        </div>

        <div
          className="h-full flex justify-center gap-10 group items-center w-full bg-no-repeat bg-[length:2000px] bg-[url(//digital-world-4.myshopify.com/cdn/shop/files/slideshow2-home4_1920x.jpg?v=1613501343)]">
          <img
            className="w-4/12 mr-5 ml-20 group-hover:scale-125 transition-all duration-500"
            src="https://digital-world-4.myshopify.com/cdn/shop/files/slideshow1-img-home4_600x.png?v=1613156855"
            alt=""
          />
          <div className=" mr-20 flex flex-col items-end w-1/2">
            <Typography className="uppercase text-gray-600 font-semibold text-end">
              Recién llegados
            </Typography>
            <Typography variant="h1" className="font-bold text-end">
              El mejor <span className="font-serif italic font-light tracking-wide">portátil</span> del año
            </Typography>
            <Typography className="text-gray-600 font-normalf text-end">
            El portátil del año combina un rendimiento imparable, una pantalla impresionante y una batería de larga duración, todo en un diseño elegante y ligero para satisfacer las necesidades de los usuarios más exigentes.
            </Typography>
            <div className="flex mt-6">
              <Button className="bg-secondary_color rounded-none font-bold">
                Comprar ahora
              </Button>
            </div>
          </div>
        </div>
      </Carousel>

      {/*Componente de tipo de elemento tecnologico */}

      <div className=" flex mt-5 mb-5 pt-5 pb-5 w-9/12 rounded-lg gap-[11%] hover:drop-shadow-xl transition-all duration-300 justify-center flex-wrap bg-gray-200">
        {
          elements.map((element) => (
            <div key={element.id} className="group flex flex-col items-center cursor-pointer">
              <div className="flex items-center flex-col">
                <span className="opacity-50 group-hover:opacity-100 transition-all">{element.icon}</span>
                <p className="font-light opacity-80 group-hover:opacity-100 transition-all text-sm">{element.name}</p>
              </div>
            
            </div>
          ))
        }
      </div>
      <Elements/>

    </div>
  );
};

export default Home;
