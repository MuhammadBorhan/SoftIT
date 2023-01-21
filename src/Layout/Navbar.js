import React from "react";
import { Link } from "react-router-dom";
import { navigation } from "../data";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, index) => {
          return (
            <li
              className="font-bold hover:text-blue-500 text-orange-500 cursor-pointer"
              key={index}
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
