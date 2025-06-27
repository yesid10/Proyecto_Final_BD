import React from "react";

const ArtesanosPage = () => {
  const arrArtesanos = [
    {
      nombre: "Juan Pérez",
      especialidad: "Cerámica",
      ubicacion: "Oaxaca, México",
      experiencia: 15,
      descripcion:
        "Artesano especializado en la creación de piezas de cerámica tradicional oaxaqueña, utilizando técnicas ancestrales.",
      imagen: "https://ejemplo.com/imagenes/juan_perez.jpg",
      redes: {
        instagram: "https://instagram.com/juanperezceramica",
        facebook: "https://facebook.com/juanperezceramica",
      },
    },
  ];

  return (
    <div class="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-96">
      <div class="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
        <img
          class="w-full h-full object-cover"
          src="https://docs.material-tailwind.com/img/team-3.jpg"
          alt="profile-picture"
        />
      </div>
      <div class="p-6 text-center">
        <h4 class="mb-1 text-xl font-semibold text-slate-800">
          Natalie Paisley
        </h4>
        <p class="text-sm font-semibold text-slate-500 uppercase">
          Product Manager
        </p>
        <p class="text-base text-slate-600 mt-4 font-light ">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to Naviglio where you can enjoy the main night life in
          Barcelona.
        </p>
      </div>
      <div class="flex justify-center p-6 pt-2 gap-7">
        <button
          class="min-w-32  rounded-md bg-primary_color py-2 px-4 border border-transparent text-center font-semibold text-sm text-secondary_color transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Follow
        </button>
      </div>
    </div>
  );
};

export default ArtesanosPage;
