import React from "react";
import { Link } from "react-router-dom";

const Artesanos = ({
  imagePosition = "left",
  title,
  description,
  buttonText,
  imageUrl,
  irMapa
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <div
      className={`flex ${
        isImageLeft ? "flex-row" : "flex-row-reverse"
      } justify-around gap-10 mb-10 w-10/12 items-center`}
    >
      <div className="flex w-9/12 cursor-pointer">
        <figure>
          <img
            className="rounded-3xl"
            src={imageUrl}
            alt="artesanos"
          />
        </figure>
      </div>
      <div className="flex w-full flex-col items-start gap-y-6">
        <h2 className="text-titles_color w-3/5 font-medium text-3xl">
          {title}
        </h2>
        <p className="text-colo_text">
          {description}
        </p>
        <Link to={`${irMapa ?  "/contact#mapa" : "/artesanos"}`} className="text-secondary_color bg-primary_color rounded-full py-4 px-5 font-medium hover:font-semibold transition-all duration-500 hover:opacity-90">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Artesanos;
