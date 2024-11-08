import React from "react";
import {
  Carousel,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Home = () => {
  return (
    <div className="flex cursor-pointer items-center justify-center mt-4">
      <Carousel
        loop="true"
        autoplay="true"
        transition={{ duration: 2 }}
        className="group rounded-xl w-9/12 h-[80vh]"
        prevArrow={({ handlePrev }) => (
          <GrFormPrevious
            onClick={handlePrev}
            className="text-3xl text-gray-300 !absolute  rounded-md bg-opacity-80
             bg-secondary_color top-2/4 left-4 -translate-y-2/4 opacity-0 group-hover:opacity-100 transition-opacity"
          />
        )}
        nextArrow={({ handleNext }) => (
          <GrFormNext
            onClick={handleNext}
            className="!absolute text-3xl text-gray-300 rounded-md bg-secondary_color bg-opacity-80
             top-2/4 !right-4 -translate-y-2/4  opacity-0 group-hover:opacity-100 transition-opacity"
          />
        )}
      >
        <div className="h-full flex justify-start items-center w-full bg-[url(//digital-world-4.myshopify.com/cdn/shop/files/slideshow2-home4_1920x.jpg?v=1613501343)]">
          <div className=" ml-10 w-3/4 md:w-2/4">
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
        <div className="h-full flex justify-start items-center w-full bg-[url(//digital-world-4.myshopify.com/cdn/shop/files/slideshow2-home4_1920x.jpg?v=1613501343)]">
          <div className=" ml-10 w-3/4 md:w-2/4">
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
      </Carousel>
    </div>
  );
};

export default Home;
