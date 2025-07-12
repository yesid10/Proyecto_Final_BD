import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const BtnVolver = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Esto retrocede una página en el historial
  };
  return (
    <button
      onClick={handleBack}
      className="flex group justify-center items-center mx-20 mt-4 mb-8 bg-secondary_color  text-titles_color  px-2 py-1 rounded hover:bg-primary_color hover:text-secondary_color transition-all duration-300"
    >
      <IoMdArrowRoundBack className="text-2xl text-primary_color hover:text-secondary_color group-hover:text-secondary_color group-hover:scale-120 transition-all duration-200" />{" "}
      Volver
    </button>
  );
};

export default BtnVolver;
