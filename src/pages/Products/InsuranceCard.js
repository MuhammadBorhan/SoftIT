import React from "react";
import "./InsuranceCard.css";

const InsuranceCard = ({ icon, title, color }) => {
  return (
    <div
      className="cards-shadow flex flex-col p-2 justify-center items-center bg-white "
      // style={{ boxShadow: "1px 1px 1px 2px lightblue" }}
    >
      <p
        className={
          color === "b"
            ? "text-blue-500"
            : color === "g"
            ? "text-green-700"
            : color === "i"
            ? "text-indigo-500"
            : color === "p"
            ? "text-purple-400"
            : color === "e"
            ? "text-emerald-400"
            : color === "y"
            ? "text-yellow-400"
            : color === "bl"
            ? "text-blue-700"
            : color === "r"
            ? "text-red-400"
            : color === "ed"
            ? "text-sky-300"
            : color === "hos"
            ? "text-teal-400"
            : ""
        }
      >
        {icon}
      </p>
      <p className="font-bold">{title}</p>
    </div>
  );
};

export default InsuranceCard;
