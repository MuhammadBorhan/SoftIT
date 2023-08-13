import React, { useEffect } from "react";
import { AiFillChrome, AiFillCodeSandboxCircle } from "react-icons/ai";
import { MdOutlinePriceChange } from "react-icons/md";
import { Link } from "react-router-dom";

const WhySoftIT = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="px-12 lg:px-32 bg-slate-100 py-6">
      <h1 className="text-center text-2xl lg:text-2xl my-8 font-bold">
        Transform your business puzzle into software solutions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-xl md:text-xl my-3">
            Create Advanced, Standalone Applications
          </h1>
          <p className="text-justify font-light text-sm">
            We know how to create top-notch software solutions for challenging
            and changing business demands. We develop applications which
            automates everyday business workflow of a company in a desired way.
            We practice custom agile process to achieve customers’ business
            goals within shorter terms and optimal budget.
          </p>
          <button className="px-4 py-1 rounded bg-sky-700 mt-4">
            <Link to="/about" className="text-white font-bold text-xs">
              WHY COMTECH
            </Link>
          </button>
        </div>
        <div className="ml-0 lg:ml-28">
          <ul className="flex flex-col items-start justify-start">
            <li className="flex items-center justify-start gap-2 font-bold font-serif text-xl">
              {" "}
              <AiFillChrome className="w-12 h-12 rounded-full text-orange-600" />{" "}
              Offshore Development Software
            </li>
            <li className="flex items-center justify-start gap-2 font-bold font-serif text-xl my-3 lg:my-6">
              {" "}
              <AiFillCodeSandboxCircle className="w-12 h-12 rounded-full text-orange-600" />{" "}
              Dedicated Teams
            </li>
            <li className="flex items-center justify-start gap-2 font-bold font-serif text-xl">
              <MdOutlinePriceChange className="w-12 h-12 rounded-full text-orange-600" />{" "}
              Fixed Price Application Development
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhySoftIT;
