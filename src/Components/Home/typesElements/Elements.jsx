import React from "react";
import { PiLaptop } from "react-icons/pi";


const Elements = () => {
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

  const tablets = [
    {
        id: 1,
        image: "https://digital-world-4.myshopify.com/cdn/shop/products/Untitled-1_1_320x.jpg?v=1491405598",
        name: "Xiaomi Mi Pad 3",
        price: "175,990.00 COP"
    },
    {
        id: 2,
        image: "https://digital-world-4.myshopify.com/cdn/shop/products/z4_320x.jpg?v=1491405577",
        name: "Xiaomi Mi 5",
        price: "305,990.00 COP"
    },
    {
        id: 3,
        image: "https://digital-world-4.myshopify.com/cdn/shop/products/Untitled-1_31cc1c0e-ac34-4c8e-946a-a5e30acf6b1a_320x.jpg?v=1491405580",
        name: "Vivo V5",
        price: "235,990.00 COP"
    },
    {
        id: 4, 
        image: "https://digital-world-4.myshopify.com/cdn/shop/products/z4_320x.jpg?v=1491405577",
        name: "Sony Xperia XA",
        price: "155,990.00 COP"
    }
  ]
  return (
    <div className="flex flex-col w-9/12 mb-10">
      <div className="flex w-full justify-between border py-4 px-4 border-t-primary_color">
        <div className="flex gap-3 items-center justify-center border-l">
          <PiLaptop className="text-2xl" />
          <span className="text-primary_color cursor-pointer text-xl font-semibold">SMARTPHONE</span>
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
      <div className="flex mt-5 w-full items-center gap-10">
        <div className="flex cursor-pointer">
            <img className="min-w-52  transition-all duration-500 ease-in" src="https://digital-world-4.myshopify.com/cdn/shop/files/banner1-left-home4_300x.png?v=1613156855" alt="" />
        </div>
            {
                tablets.map((tablet) =>(
                    <div key={tablet.id} className="hover:scale-105 transition-all duration-500 flex flex-col px-5 cursor-pointer border py-5">
                        <img className=" hover:scale-110 transition-all duration-500" src={tablet.image} alt={tablet.name} />
                        <div className="flex flex-col gap-.5 mt-3">
                          <span className="font-light">{tablet.name}</span>
                          <span className="font-light">${tablet.price}</span>
                        </div>
                    </div>
                ))
            }
      </div>
    </div>
  );
};

export default Elements;
