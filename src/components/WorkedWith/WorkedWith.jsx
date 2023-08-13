import React from "react";
import { images } from "../../data";

const WorkedWith = () => {
  return (
    <div className="bg-slate-100 px-10 lg:px-16 py-10">
      <h1 className="text-center text-xl lg:text-3xl font-bold mb-12">
        Who we have worked with
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">
        {images.map((image, index) => {
          return (
            <div key={index} className="text-center">
              <img className="w-20 h-20 mx-auto" src={image.link} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkedWith;
