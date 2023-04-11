import React from "react";

const Feature = ({ icon, title }) => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center py-4 items-center lg:justify-between px-2 lg:px-4 rounded gap-2 lg:gap-10 bg-white"
      style={{
        boxShadow: "1px 1px 1px 2px lightblue",
      }}
    >
      <span className="text-2xl lg:text-5xl">{icon}</span>
      <p className="font-bold text-xs lg:text-sm">{title}</p>
    </div>
  );
};

export default Feature;
