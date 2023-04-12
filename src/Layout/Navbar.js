import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../data";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const handleClick = (e, index) => {
    setActive(index);
  };

  const { pathname } = useLocation();
  return (
    <nav>
      {/* <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, index) => {
          return (
            <div className="parent">
              <li
                className={`parent_li font-bold hover:text-blue-500  cursor-pointer ${
                  active === index
                    ? "bg-orange-500 text-white px-2 py-1 rounded-full font-bold"
                    : "text-orange-500"
                } `}
                key={index}
                onClick={(e) => {
                  handleClick(e, index);
                }}
              >
                <Link
                  to={item.href}
                  className="parent_li_a transition-all duration-300"
                >
                  {item.name}
                </Link>
              </li>
            </div>
          );
        })}
      </ul> */}
      <div className="navbar">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li
              className={` hover:text-blue-500 font-bold ${
                pathname === "/" ? "text-blue-500 font-bold" : "text-orange-500"
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={` hover:text-blue-500 font-bold ${
                pathname === "/about"
                  ? "text-blue-500 font-bold"
                  : "text-orange-500"
              }`}
            >
              <Link to="#">
                About
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
              <ul
                className="p-2 bg-slate-100"
                style={{ borderTop: "2px solid blue" }}
              >
                <li className="text-orange-500 font-bold">
                  <Link to="/about/message-from-md">Message from MD</Link>
                </li>
                <li className="text-orange-500 font-bold">
                  <Link to="/about/about-us">Who We Are</Link>
                </li>
                <li className="text-orange-500 font-bold">
                  <Link to="/about/our-team">Our Team</Link>
                </li>
              </ul>
            </li>
            <li
              className={` hover:text-blue-500 font-bold ${
                pathname === "/about"
                  ? "text-blue-500 font-bold"
                  : "text-orange-500"
              }`}
            >
              <Link to="#">
                Clients
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
              <ul
                className="p-2 bg-slate-100"
                style={{ borderTop: "2px solid blue" }}
              >
                <li className="text-orange-500 font-bold">
                  <Link to="/client/insurance">Insurance</Link>
                </li>
                <li className="text-orange-500 font-bold">
                  <Link to="/client/hospital">Hospitals</Link>
                </li>
                <li className="text-orange-500 font-bold">
                  <Link to="/client/Education">Educations</Link>
                </li>
              </ul>
            </li>
            <li
              tabIndex={0}
              className={` hover:text-blue-500 font-bold ${
                pathname === "/uiux"
                  ? "text-blue-500 font-bold"
                  : "text-orange-500"
              }`}
            >
              <Link to="#">
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
              <ul
                className="p-2 bg-slate-100"
                style={{ borderTop: "2px solid blue" }}
              >
                <li className="text-orange-500 font-bold">
                  <Link to="/service/softDev">Software Development</Link>
                </li>
                <li className="text-orange-500 font-bold">
                  <Link to="/service/web-development">
                    Web Design & Development
                  </Link>
                </li>
                <li className="text-orange-500 font-bold">
                  <Link to="/service/app-development">Apps Development</Link>
                </li>
              </ul>
            </li>
            <li
              tabIndex={0}
              className={` hover:text-blue-500 font-bold ${
                pathname === "/uiux"
                  ? "text-blue-500 font-bold"
                  : "text-orange-500"
              }`}
            >
              <Link to="/service/web-development">
                Products
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
              <ul
                className="p-2 bg-slate-100"
                style={{ borderTop: "2px solid blue" }}
              >
                <li className="text-orange-500 font-bold">
                  <Link to="/product/insurance">Insurance</Link>
                </li>
                <li className="text-orange-500 font-bold">
                  <Link to="/product/education">Education</Link>
                </li>
                <li className="text-orange-500 font-bold">
                  <Link to="/product/hospital">Hospitals</Link>
                </li>
              </ul>
            </li>
            <li
              className={` hover:text-blue-500 font-bold ${
                pathname === "/portfolio"
                  ? "text-blue-500 font-bold"
                  : "text-orange-500"
              }`}
            >
              <Link to="portfolio">Training</Link>
            </li>
            <li
              className={`hidden hover:text-blue-500 font-bold ${
                pathname === "/price"
                  ? "text-blue-500 font-bold"
                  : "text-orange-500"
              }`}
            >
              <Link to="price">Price</Link>
            </li>
            <li
              className={` hover:text-blue-500 font-bold ${
                pathname === "/contact"
                  ? "text-blue-500 font-bold"
                  : "text-orange-500"
              }`}
            >
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
