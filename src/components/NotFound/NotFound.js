import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-[36vh] flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mt-20 text-red-500">
        sorry page not found
      </h1>
      <Link
        to="/"
        className="mt-10 text-blue-500 font-bold underline cursor-pointer"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
