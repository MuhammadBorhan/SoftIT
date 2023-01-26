import React from "react";
import "./Banner.css";

const Banner = ({ image, title, text }) => {
  return (
    <div className="mt-20">
      <div className="bg" style={{ backgroundImage: image }}>
        <div className="flex justify-center relative top-60 px-6 lg:px-12 flex-col gap-y-4 items-center">
          <h1 className="zIndex text-white text-2xl lg:text-5xl text-center">
            {title}
          </h1>
          <p className="zIndex text-center lg:text-2xl text-white">{text}</p>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Banner;
