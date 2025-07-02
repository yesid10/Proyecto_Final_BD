import React, { useEffect, useState } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Elements from "./typesElements/Elements";
import { GiPoncho } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { MdToys } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { GiDropEarrings } from "react-icons/gi";
import { useProduct } from "../../zustand/useProducts";
import Artesanos from "./listaArtesanos/Artesanos";

const Home = () => {
  const { functionGet, setCategory, categories, selectedCategory } =
    useProduct();
  const [categoriesWithIcons, setCategoriesWithIcons] = useState([]);

  useEffect(() => {
    functionGet("list");
  }, [functionGet]);

  const elements = [
    {
      id: 1,
      name: "Ruanas",
      icon: <GiPoncho className="text-2xl" />,
    },
    {
      id: 2,
      name: "Zapatos",
      icon: <GiRunningShoe className="text-2xl" />,
    },
    {
      id: 3,
      name: "Juguetes",
      icon: <MdToys className="text-2xl" />,
    },
    {
      id: 4,
      name: "Cerámica",
      icon: <PiPottedPlantFill className="text-2xl" />,
    },
    {
      id: 5,
      name: "Accesorios",
      icon: <GiDropEarrings className="text-2xl" />,
    },
    {
      id: 6,
      name: "Alimentos Típicos",
      icon: <MdEmojiFoodBeverage className="text-2xl" />,
    },
  ];

  useEffect(() => {
    const categoriesWithIcons = categories.map((category) => {
      const iconoAsociado = elements.find((icon) => {
        return icon.name === category.nombre;
      });

      return {
        ...category,
        icono: iconoAsociado ? iconoAsociado.icon : null,
      };
    });

    setCategoriesWithIcons(categoriesWithIcons);
  }, [categories]);

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-4 ">
      {/* Carousel */}
      <Carousel
        loop={true}
        autoplay={true}
        transition={{ duration: 2 }}
        className="group rounded-xl w-9/12 h-[80vh] cursor-pointer"
        prevArrow={({ handlePrev }) => (
          <GrFormPrevious
            onClick={handlePrev}
            className="text-3xl text-secondary_color  w-[3.5%] h-[6%] !absolute  rounded-md bg-opacity-80
             bg-primary_color top-2/4 left-4 -translate-y-2/4 opacity-0 group-hover:opacity-100 transition-opacity"
          />
        )}
        nextArrow={({ handleNext }) => (
          <GrFormNext
            onClick={handleNext}
            className="!absolute text-3xl w-[3.5%] h-[6%] text-secondary_color rounded-md bg-primary_color bg-opacity-80
             top-2/4 !right-4 -translate-y-2/4  opacity-0 group-hover:opacity-100 transition-opacity"
          />
        )}
      >
        <div className="h-full w-full justify-center gap-10 flex items-center bg-no-repeat bg-[length:2000px] bg-[url(//digital-world-4.myshopify.com/cdn/shop/files/slideshow2-home4_1920x.jpg?v=1613501343)] ">
          <div className="flex flex-col justify-start w-1/2 mr-5 ml-20">
            <Typography className="uppercase text-gray-600 font-semibold">
              El mejor vendido
            </Typography>
            <Typography variant="h1" className="font-bold text-titles_color">
              Bolso Montaña
            </Typography>
            <Typography className="text-colo_text font-normal">
              Bolso artesanal hecho a mano con tela resistente y detalles
              bordados inspirados en los paisajes montañosos. Su diseño es
              espacioso y versátil, ideal para llevar lo esencial en tus
              aventuras diarias, combinando estilo y funcionalidad.
            </Typography>
            <div className="flex mt-6">
              <Button className="bg-primary_color rounded-none font-bold">
                Comprar ahora
              </Button>
            </div>
          </div>
          <img
            src="https://images.stockcake.com/public/8/3/f/83f128f6-ec2e-4456-95a2-89c90e0a9651_large/colorful-knitted-bag-stockcake.jpg"
            alt="image 1"
            className="flex object-contain h-2/3 w-4/12 rounded-tr-full hover:rounded-3xl hover:scale-110   transition-all duration-500 ease-in-out"
          />
        </div>

        <div className="h-full flex justify-center gap-10 items-center w-full bg-no-repeat bg-[length:2000px] bg-[url(//digital-world-4.myshopify.com/cdn/shop/files/slideshow2-home4_1920x.jpg?v=1613501343)]">
          <img
            className="w-4/12 mr-5 ml-20 rounded-bl-full hover:rounded-3xl hover:scale-110 transition-all duration-500"
            src="https://images.stockcake.com/public/a/d/8/ad8f8af4-1baa-4434-9389-a5eec7ee1d67_large/majestic-mountain-view-stockcake.jpg"
            alt=""
          />
          <div className=" mr-20 flex flex-col items-end w-1/2">
            <Typography className="uppercase text-gray-600 font-semibold text-end">
              Recién llegados
            </Typography>
            <Typography
              variant="h1"
              className="font-bold text-titles_color text-end"
            >
              El mejor{" "}
              <span className="font-serif italic font-light tracking-wide">
                portátil
              </span>{" "}
              del año
            </Typography>
            <Typography className="text-colo_text font-normalf text-end">
              El portátil del año combina un rendimiento imparable, una pantalla
              impresionante y una batería de larga duración, todo en un diseño
              elegante y ligero para satisfacer las necesidades de los usuarios
              más exigentes.
            </Typography>
            <div className="flex mt-6">
              <Button className="bg-primary_color rounded-none font-bold">
                Comprar ahora
              </Button>
            </div>
          </div>
        </div>
      </Carousel>

      {/*Componente de tipo de elemento tecnologico */}

      <div className=" flex my-5 pt-5 pb-5 w-9/12 rounded-lg gap-[11%] hover:drop-shadow-xl transition-all duration-300 justify-center flex-wrap bg-gray-200">
        {categoriesWithIcons.map((element) => (
          <div
            onClick={() => handleCategoryChange(element.nombre)}
            key={element.categoriaId}
            className={`${selectedCategory === element.nombre ? "opacity-100" : "opacity-50"
              } transition-all duration-500  flex flex-col my-3 items-center cursor-pointer`}
          >
            <div className="flex items-center flex-col">
              <span>{element.icono}</span>
              <p className="font-light transition-all text-sm">
                {element.nombre}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Elements />
      <Elements />
      <Artesanos
        imagePosition="right"
        title="Visita nuestra tienda de artesanías en Cucaita"
        buttonText="¿ Donde estamos ubicados ?"
        description="Artesanías de Cucaita es una tienda dedicada a resaltar la riqueza cultural y la tradición artesanal de Cucaita, Boyacá. Aquí encontrarás una cuidada selección de productos únicos elaborados a mano por talentosos artesanos locales, quienes combinan técnicas ancestrales con diseños contemporáneos. "
        irMapa={true}
        imageUrl="https://images.stockcake.com/public/3/0/f/30f19187-87a7-454e-9053-acd0d3b6bb6a_large/artisans-weaving-textiles-stockcake.jpg"
      />
      <Artesanos
        imagePosition="left"
        title="Nuestros creadores de artesanías de Cucaita"
        description="Los artesanos de Cucaita, Boyacá, son guardianes de tradiciones ancestrales que reflejan la riqueza cultural de la región. Reconocidos por su habilidad y creatividad, trabajan con materiales como lana, fique, y madera para crear ruanas, sombreros, y otros productos únicos que combinan funcionalidad y arte."
        buttonText="Conoce a nuestros artesanos"
        imageUrl="https://images.stockcake.com/public/3/0/f/30f19187-87a7-454e-9053-acd0d3b6bb6a_large/artisans-weaving-textiles-stockcake.jpg"
      />
    </div>
  );
};

export default Home;
