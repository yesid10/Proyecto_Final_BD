import React from "react";

const Artesanos = () => {
  return (
    <div className="flex justify-around gap-10 mb-10 w-10/12 items-center">
      <div className="flex w-9/12 cursor-pointer">
        <figure>
          <img
            className="rounded-3xl"
            src="https://images.stockcake.com/public/3/0/f/30f19187-87a7-454e-9053-acd0d3b6bb6a_large/artisans-weaving-textiles-stockcake.jpg"
            alt="artesanos"
          />
        </figure>
      </div>
      <div className="flex w-full flex-col items-start gap-y-6">
        <h2 className="text-titles_color w-3/5 font-medium text-3xl">
          Nuestros creadores de artesanías de Cucaita
        </h2>
        <p className="text-colo_text">
          Los artesanos de Cucaita, Boyacá, son guardianes de tradiciones
          ancestrales que reflejan la riqueza cultural de la región. Reconocidos
          por su habilidad y creatividad, trabajan con materiales como lana,
          fique, y madera para crear ruanas, sombreros, y otros productos únicos
          que combinan funcionalidad y arte.
        </p>
        <button className="text-secondary_color bg-primary_color rounded-full py-4 px-5 font-medium hover:font-semibold transition-all duration-500 hover:opacity-90">
          Conoce a nuestros artesanos
        </button>
      </div>
    </div>
  );
};

export default Artesanos;
