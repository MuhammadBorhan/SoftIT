import React from "react";

const Service = ({ title, img, desc, icon }) => {
  return (
    // <div className=" max-w-xl">
    //   <span className="">{icon}</span>
    //   <div className="card-body items-center text-center">
    //     <h2 className="card-title mb-6">{title}</h2>
    //     <p className="text-center">{desc}</p>
    //   </div>
    // </div>

    <div
      className="card max-w-xl"
      data-aos="zoom-in-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <span className="">{icon}</span>
      <div className="card-body items-center text-center text-black">
        <h2 className="md:text-lg mb-2 md:mb-4 text-gray-600">{title}</h2>
        <p className="text-center font-light hidden md:block">{desc}</p>
        <p className="text-center font-light text-sm block md:hidden">{desc}</p>
      </div>
    </div>
  );
};

export default Service;
