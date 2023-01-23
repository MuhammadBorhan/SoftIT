import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { navigation } from "../data";
import { Link, useLocation } from "react-router-dom";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);

  const handleClick = (e, index) => {
    setIsOpen(false);
    setActive(index);
  };

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        // stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };
  return (
    <nav className="z-50">
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-orange-500"
      >
        <AiOutlineMenu className="w-6 h-6" />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-indigo-900 fixed top-0 right-0"
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer text-white absolute top-8 right-8"
        >
          <ImCross className="w-6 h-6" />
        </div>
        {navigation.map((item, index) => {
          return (
            <li
              key={index}
              className={`mb-8 z-50  ${
                active === index
                  ? "bg-white text-blue-500 px-2 py-1 rounded-full font-bold"
                  : "text-white"
              }`}
            >
              <Link
                // onClick={() => setIsOpen(false)}
                onClick={(e) => {
                  handleClick(e, index);
                }}
                to={item.href}
                className="text-xl cursor-pointer capitalize"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default MobileNav;
