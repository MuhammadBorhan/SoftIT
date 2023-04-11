import React from "react";

const Feature = ({ icon, title }) => {
  return (
    <div
      className="flex py-4 items-center justify-between px-4 rounded gap-10 bg-white"
      style={{
        boxShadow: "1px 1px 1px 2px lightblue",
      }}
    >
      <span className="text-5xl">{icon}</span>
      <p className="font-bold">{title}</p>
    </div>
  );
};

export default Feature;
