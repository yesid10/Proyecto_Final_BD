import React, { useEffect, useState } from "react";
import { GiPoncho } from "react-icons/gi";
import { useProduct } from "../../../zustand/useProducts";


const Elements = () => {

  const { categories, selectedCategory } = useProduct();
  const [arrayproducts, setArrayProducts] = useState([]);


  const filteredProducts = selectedCategory ? categories.filter((category) =>
    category.nombre === selectedCategory
  ) : [];

 

  useEffect(() => {
    if (filteredProducts.length > 0) {
      setArrayProducts(filteredProducts[0].products || []);
    }
  }, [filteredProducts]);

  const limitedProducts = arrayproducts.slice(0, 4);


  const marcas = [
    {
      id: 1,
      marca: "Apple",
    },
    {
      id: 2,
      marca: "Samsung",
    },
    {
      id: 3,
      marca: "LG",
    },
    {
      id: 4,
      marca: "Xiaomi",
    },
    {
      id: 5,
      marca: "Huawei",
    },
    {
      id: 6,
      marca: "Oppo",
    },
  ];

  // const products = [
  //   {
  //       id: 1,
  //       image: "https://digital-world-4.myshopify.com/cdn/shop/products/Untitled-1_1_320x.jpg?v=1491405598",
  //       name: "Xiaomi Mi Pad 3",
  //       price: "175,990.00 COP"
  //   },
  //   {
  //       id: 2,
  //       image: "https://digital-world-4.myshopify.com/cdn/shop/products/z4_320x.jpg?v=1491405577",
  //       name: "Xiaomi Mi 5",
  //       price: "305,990.00 COP"
  //   },
  //   {
  //       id: 3,
  //       image: "https://digital-world-4.myshopify.com/cdn/shop/products/Untitled-1_31cc1c0e-ac34-4c8e-946a-a5e30acf6b1a_320x.jpg?v=1491405580",
  //       name: "Vivo V5",
  //       price: "235,990.00 COP"
  //   },
  //   {
  //       id: 4, 
  //       image: "https://digital-world-4.myshopify.com/cdn/shop/products/z4_320x.jpg?v=1491405577",
  //       name: "Sony Xperia XA",
  //       price: "155,990.00 COP"
  //   }
  // ]
  return (
    <div className="transform animate-slide-in-right flex flex-wrap flex-col w-9/12 mb-10">
      <div className="flex w-full justify-between border py-4 px-4 border-t-primary_color">
        <div className="flex gap-3 items-center justify-center border-l">
          <GiPoncho className="text-2xl" />
          <span className="text-primary_color cursor-pointer text-xl font-semibold">RUANAS</span>
        </div>
        <div className="flex gap-5 items-center">
          {marcas.map((marca) => (
            <div className="flex gap-4" key={marca.id}>
              <span className="text-gray-700 items-center text-sm hover:text-primary_color transition-all cursor-pointer">
                {marca.marca}
              </span>
              <span className="border bg-gray-400"></span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-5 w-full justify-center items-center gap-10">
        {/* Primera imagen sola, más grande y sin información */}
        {limitedProducts[0] && (
          <div className="flex items-center justify-center">
            <img
              className="w-64 h-72 rounded-lg object-cover shadow-lg transition-all duration-500"
              src={limitedProducts[0].imagen_url}
              alt="Imagen principal"
            />
          </div>
        )}
        {/* Las siguientes tres cards con información */}
        {limitedProducts.slice(1).map((product) => (
          <div
            key={product.productoId}
            className="hover:scale-105 transition-all duration-500 flex justify-center items-center flex-col px-5 cursor-pointer rounded-lg border py-5 min-w-[15rem] min-h-[18rem]"
          >
            <img
              src={product.imagen_url}
              alt={product.nombre}
              className="object-cover rounded-sm transition-all duration-500 w-40 h-40 hover:scale-110"
            />
            <div className="flex w-full flex-col gap-1 mt-3">
              <span className="font-light text-colo_text">{product.nombre}</span>
              <span className="font-medium text-titles_color">${product.precio}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Elements;
