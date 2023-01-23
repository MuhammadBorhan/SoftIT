import React from "react";
import { priceDetails } from "../../data";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineCheck } from "react-icons/ai";
import "./ChoosePrice.css";

const ChoosePrice = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-0 lg:px-20 mt-10">
      {priceDetails.map((details, index) => {
        const { requirement, name, price } = details;
        return (
          <div
            key={index}
            className="shadow-md hover:cursor-pointer hover:-translate-y-8 transition-all main_box"
          >
            <div className="p-12 bg-blue-600 font-bold text-white text-center rounded-t-md top_box">
              <h1 className="text-2xl font-bold">{name}</h1>
              <p className="text-5xl font-bold my-2">{price} $</p>
              <p className="font-mono text-gray-200">Per Month</p>
            </div>
            <div className="p-12">
              {requirement.map((item, index) => (
                <div key={index}>
                  <p className="flex items-center gap-2 my-1 font-bold">
                    <p
                      className={`${
                        item.name === "check"
                          ? "text-green-500"
                          : "text-red-500"
                      } `}
                    >
                      {item.name === "check" ? (
                        <AiOutlineCheck />
                      ) : (
                        <RxCross2 />
                      )}
                    </p>
                    {item.item}
                  </p>
                </div>
              ))}
            </div>
            <button className="px-4 py-2 bg-blue-600 font-bold text-white block mx-auto mb-6 buttons">
              Buy Now
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ChoosePrice;
