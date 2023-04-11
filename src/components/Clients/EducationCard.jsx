import React from "react";

const EducationCard = ({ img, title }) => {
  return (
    <div
      className="flex items-center justify-center rounded gap-10 bg-white"
      style={{
        boxShadow: "1px 1px 1px 2px lightblue",
      }}
    >
      <img className="w-40 lg:w-48 h-20 lg:h-32" src={img} alt="" />
      <p className="font-bold">{title}</p>
    </div>
  );
};

export default EducationCard;
