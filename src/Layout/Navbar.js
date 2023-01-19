import React from "react";
import { Link } from "react-router-dom";
import { navigation } from "../data";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, idx) => {
          return (
            <li
              className="text-white font-bold hover:text-blue-500 cursor-pointer"
              key={idx}
            >
              <Link
                to={item.href}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
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
