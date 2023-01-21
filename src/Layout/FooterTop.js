import React from "react";
import { BsLinkedin, BsTelephone, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdArrowRightAlt, MdEmail, MdSendAndArchive } from "react-icons/md";

const FooterTop = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 container bg-gray-900 text-white mx-auto p-10 relative top-24">
      <div>
        <h1 className="text-5xl font-bold text-teal-400 mb-4">SoftIT</h1>
        <p className="flex items-center gap-2 ">
          {" "}
          <ImLocation className="w-12 h-12 rounded-full text-orange-600" />
          House 101 (2nd Floor), Road 5, Adarsha Nogor, Badda ( Gulshan ), Dhaka
          -1212
        </p>
        <p className="flex items-center gap-2 my-4">
          {" "}
          <MdEmail className="w-8 h-8 rounded-full text-orange-600" />{" "}
          info@softit.com
        </p>
        <p className="flex items-center gap-2 ">
          {" "}
          <BsTelephone className="w-8 h-8 rounded-full text-orange-600" />{" "}
          +880-1620658621
        </p>
      </div>
      <div className="ml-0 lg:ml-20">
        <p className="text-xl font-bold mb-6">Company</p>
        <ul>
          <li className="flex items-center gap-2 mb-1 cursor-pointer hover:text-orange-400 transition-all duration-300">
            {" "}
            <MdArrowRightAlt /> Our Blog
          </li>
          <li className="flex items-center gap-2 mb-1 cursor-pointer hover:text-orange-400 transition-all duration-300">
            {" "}
            <MdArrowRightAlt /> About Us
          </li>
          <li className="flex items-center gap-2 mb-1 cursor-pointer hover:text-orange-400 transition-all duration-300">
            {" "}
            <MdArrowRightAlt /> Projects
          </li>
          <li className="flex items-center gap-2 mb-1 cursor-pointer hover:text-orange-400 transition-all duration-300">
            {" "}
            <MdArrowRightAlt /> Contact Us
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Subscribe newsletter</h3>
        <p className="mb-2 font-mono">Get latest updates and offers</p>
        <div>
          <input
            type="text"
            placeholder="Send Your Email"
            className="border p-2 pr-20 w-full text-black rounded-full"
          />
          <button>
            <MdSendAndArchive className="w-20 h-10 relative left-[321px] lg:left-[292px] bottom-[41px]  text-white bg-orange-500 rounded-full px-2" />
          </button>
        </div>
        <p className="text-xl font-bold mt-[-20px]">Follow Us</p>
        <div className="flex gap-6 mt-2">
          <a href="facebook.com">
            <FaFacebook className="" />
          </a>
          <a href="Whatsapp.com">
            <BsWhatsapp className="" />
          </a>
          <a href="Linkedin.com">
            <BsLinkedin className="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
