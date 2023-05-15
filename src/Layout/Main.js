import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import logo from "../assets/logo.png";
// import comtech from "../assets/comtech.png";
import comtechLogo from "../assets/comtech_logo.png";
import { FaPhoneVolume } from "react-icons/fa";

const Main = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <>
      <header
        style={{ boxShadow: "1px 1px 5px lightblue" }}
        className={` fixed top-0 w-full z-10 transition-all duration-300 ${
          bg
            ? "bg-gradient-to-r from-gray-200 from-10% via-sky-100 via-30% to-purple-200 to-90%  h-24 border-b-2 "
            : "h-20 bg-gradient-to-r from-slate-200 from-10% via-gray-100 via-30% to-gray-300 to-90%"
        } `}
      >
        <div
          className={`px-6 md:px-12 h-full flex items-center justify-between `}
        >
          {/* logo */}
          <Link to="/" className="">
            {/* <span className="text-cyan-500">Soft</span>
            <span className="text-orange-500">IT</span> */}
            <img
              // src="https://i.ibb.co/8gvTfgk/1-1.jpg"
              src={comtechLogo}
              alt="logo"
              className={`w-40 lg:w-full`}
            />
          </Link>

          {/* navbar for desktop*/}
          <div className="hidden lg:block">
            <Navbar />
          </div>

          {/* navbar for mobile*/}
          <div className="lg:hidden z-50">
            <MobileNav />
          </div>

          {/* contact number */}
          <div className="hidden lg:block">
            <div className="text-indigo-600 flex w-[200px] items-center gap-2 ">
              <FaPhoneVolume className="" />
              <div>
                <h1 className="font-bold">+8801620658621</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>
        <Outlet />
      </div>
      <div>
        <FooterTop />
        <FooterBottom />
      </div>
    </>
  );
};

export default Main;
