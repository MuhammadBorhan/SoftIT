import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../data";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const handleClick = (e, index) => {
    setActive(index);
  };
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, index) => {
          return (
            <li
              className={`font-bold hover:text-blue-500  cursor-pointer ${
                active === index
                  ? "bg-orange-500 text-white px-2 py-1 rounded-full font-bold"
                  : "text-orange-500"
              } `}
              key={index}
              onClick={(e) => {
                handleClick(e, index);
              }}
            >
              <Link to={item.href} className="transition-all duration-300">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
