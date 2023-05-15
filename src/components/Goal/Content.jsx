import React from "react";

const Content = ({ title, img, desc, icon }) => {
  return (
    <div className=" max-w-xl bg-base-100 shadow-xl">
      <figure className="">
        <img src={img} alt="Shoes" className="" />
        <span className="">{icon}</span>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title mt-[-30px]">{title}</h2>
        <p className="text-justify my-2">{desc}</p>
      </div>
    </div>
  );
};

export default Content;
