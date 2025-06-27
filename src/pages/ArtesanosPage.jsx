import React from "react";

const ArtesanosPage = () => {
  const arrArtesanos = [
    {
      id: 1,
      name: "Teresa Novoa",
      cargo: "Artesana",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      image: "https://docs.material-tailwind.com/img/team-3.jpg",
    },
    {
      id: 2,
      name: "Teresa Novoa",
      cargo: "Artesana",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      image: "https://docs.material-tailwind.com/img/team-1.jpg",
    },
    {
      id: 3,
      name: "Teresa Novoa",
      cargo: "Artesana",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      image: "https://docs.material-tailwind.com/img/team-2.jpg",
    },
    {
      id: 4,
      name: "Teresa Novoa",
      cargo: "Artesana",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      image: "https://docs.material-tailwind.com/img/team-4.jpg",
    },
    {
      id: 5,
      name: "Teresa Novoa",
      cargo: "Artesana",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      image: "https://docs.material-tailwind.com/img/team-5.jpg",
    },
    {
      id: 6,
      name: "Teresa Novoa",
      cargo: "Artesana",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      image: "https://docs.material-tailwind.com/img/team-6.jpg",
    },
  ];

  return (
    <div className="flex justify-evenly flex-wrap">
      {arrArtesanos?.map((artesano) => (
        <div className="flex cursor-pointer flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-96">
          <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
            <img
              className="w-full h-full object-cover hover:scale-110 transition-all duration-200"
              src={artesano.image}
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-1 text-xl font-semibold text-slate-800 text-colo_text">
              {artesano.name}
            </h4>
            <p className="text-sm font-semibold text-slate-500 uppercase">
              {artesano.cargo}
            </p>
            <p className="text-base text-slate-600 mt-4 font-light ">
              {artesano.description}
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <button
              className="min-w-32  rounded-md bg-primary_color py-2 px-4 border border-transparent text-center font-semibold text-sm text-secondary_color transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Ver mas
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtesanosPage;
