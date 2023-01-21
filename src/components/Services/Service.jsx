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

    <div className="card w-96 ">
      <span className="">{icon}</span>
      <div className="card-body items-center text-center text-black">
        <h2 className="card-title mb-6">{title}</h2>
        <p className="text-center">{desc}</p>
      </div>
    </div>
  );
};

export default Service;
