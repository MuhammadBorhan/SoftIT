import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Main = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 30 ? setBg(true) : setBg(false);
    });
  });
  return (
    <>
      <header
        className={`${
          bg ? "bg-indigo-700 text-white h-20" : "h-20"
        } fixed top-0 w-full z-10 transition-all duration-300`}
      >
        <div className="px-6 md:px-12 h-full flex items-center justify-between">
          {/* logo */}
          <Link to="/" className="text-4xl font-bold">
            <span>Soft</span>
            <span className="text-yellow-400">IT</span>
          </Link>

          {/* navbar for desktop*/}
          <div className="hidden lg:block">
            <Navbar />
          </div>

          {/* navbar for mobile*/}
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </header>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Main;
