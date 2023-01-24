import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { navigation } from "../data";
import { Link, useLocation } from "react-router-dom";

const MobileNav = () => {
  const { pathname } = useLocation();
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
        {/* {navigation.map((item, index) => {
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
        })} */}
        <div className="navbar">
          <div className="">
            <ul className="menu menu-vertical px-1">
              <li
                className={` hover:text-orange-500 font-bold ${
                  pathname === "/" ? "text-orange-500 font-bold" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={` hover:text-orange-500 font-bold ${
                  pathname === "/about"
                    ? "text-orange-500 font-bold"
                    : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Link to="about">About</Link>
              </li>
              <li
                tabIndex={0}
                className={` hover:text-orange-500 font-bold ${
                  pathname === "/uiux"
                    ? "text-orange-500 font-bold"
                    : "text-white"
                }`}
              >
                <Link to="">
                  Services
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul className="p-2 bg-white w-60">
                  <li
                    className="text-black font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/uiux">UI/UX Designing</Link>
                  </li>
                  <li
                    className="text-black font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="">Web Design & Development</Link>
                  </li>
                  <li
                    className="text-black font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="">App Development</Link>
                  </li>
                </ul>
              </li>
              <li
                className={` hover:text-orange-500 font-bold ${
                  pathname === "/portfolio"
                    ? "text-orange-500 font-bold"
                    : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Link to="portfolio">Portfolio</Link>
              </li>
              <li
                className={` hover:text-orange-500 font-bold ${
                  pathname === "/price"
                    ? "text-orange-500 font-bold"
                    : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Link to="price">Price</Link>
              </li>
              <li
                className={` hover:text-orange-500 font-bold ${
                  pathname === "/contact"
                    ? "text-orange-500 font-bold"
                    : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.ul>
    </nav>
  );
};

export default MobileNav;
