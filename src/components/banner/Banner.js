import React from "react";
import "./Banner.css";

const Banner = ({ image, title, desc }) => {
  return (
    <div>
      <div className="bg" style={{ backgroundImage: image }}>
        <div className="flex justify-center flex-col gap-y-4 items-center h-screen">
          <h1 className="zIndex text-white text-2xl lg:text-5xl text-center">
            Software Products to Maximize Business Value
          </h1>
          <p className="zIndex lg:text-2xl text-white">
            Smart applications to manage time, communication, or delivery
          </p>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Banner;
