import React from "react";

const InsuranceCard = ({ icon, title }) => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-white"
      style={{ boxShadow: "1px 1px 1px 2px lightblue" }}
    >
      <p className="">{icon}</p>
      <p>{title}</p>
    </div>
  );
};

export default InsuranceCard;
