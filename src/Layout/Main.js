import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Main = () => {
  const [bg, setBg] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <>
      <header
        className={` fixed text-white md:text-white top-0 w-full z-10 transition-all duration-300 ${
          bg ? "bg-white h-20 border-b-2 " : "h-16 text-white"
        } `}
      >
        <div
          className={`px-6 md:px-12 h-full flex items-center justify-between `}
        >
          {/* logo */}
          <Link to="/" className="text-4xl font-bold">
            <span className="text-cyan-500">Soft</span>
            <span className="text-orange-500">IT</span>
          </Link>

          {/* navbar for desktop*/}
          <div className="hidden lg:block">
            <Navbar />
          </div>

          {/* navbar for mobile*/}
          <div className="lg:hidden z-50">
            <MobileNav />
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
