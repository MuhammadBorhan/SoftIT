import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FaLocationArrow, FaPhoneVolume } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdEmail, MdLocationCity } from "react-icons/md";
import Banner from "../components/banner/Banner";
import { ChangeTitle } from "../utils/ChangeTitle";

const Contact = () => {
  ChangeTitle("Contact With Us");
  return (
    <div className="mt-20">
      {/* <div>
        <Banner
          image="url('https://www.scnsoft.com/blog-pictures/software-development-outsourcing/sw-development-teams.png')"
          title="Software Products to Maximize Business Value"
          text="Instead of just telling interviewers about your technical skillsets and expertise, a portfolio allows you to show them. Creating a portfolio site can seem daunting and time consuming."
        />
      </div> */}
      <div className="px-12 py-10 bg-gray-100">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl font-bold">Contact With Us</h2>
          <p className="">
            If you have any information please E-mail or Phone us
          </p>
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-3 justify-center text-center items-center gap-10 my-8">
          <div className="shadow-lg bg-white p-6 flex flex-col gap-y-2 rounded hover:bg-green-500 hover:text-white transition-all">
            <span>
              <ImLocation className=" block mx-auto text-green-700 text-4xl font-bold" />
            </span>
            <p className="text-xl font-bold">Address</p>
            <p>2/17, B-Block, Lalmatia, Mohammadpur, Dahaka-1212, Bangladesh</p>
          </div>
          <div className="shadow-md bg-white p-6  flex flex-col gap-y-2 rounded hover:bg-green-500 hover:text-white transition-all">
            <span>
              <BsTelephone className=" block mx-auto text-green-700 text-4xl font-bold" />
            </span>
            <p className="text-xl font-bold">Phone Number</p>
            <div className="flex justify-center items-center">
              <FaPhoneVolume />
              <h1 className="">+8801620658621</h1>
            </div>
            <div className="flex justify-center items-center">
              <FaPhoneVolume />
              <h1 className="">+8801620658621</h1>
            </div>
          </div>
          <div className="shadow-md bg-white p-6  flex flex-col gap-y-2 hover:bg-green-500 hover:text-white transition-all">
            <span>
              <MdEmail className=" block mx-auto text-green-700 text-4xl font-bold" />
            </span>
            <p className="text-xl font-bold">Email</p>
            <p>info@comtech.com</p>
            <p>comtechsbd@gmail.com</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 rounded">
          <div>
            <iframe
              // width="700"
              // height="500"
              className="w-full h-[300px] lg:h-[500px]"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Adarshanogor,badda,dhaka,1212&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
          <div className="flex flex-col justify-center lg:gap-x-8 lg:flex-row bg-gray-600 opacity-80 p-8">
            <form className="space-y-4 w-full max-w-[780px]">
              <div className="flex flex-col lg:flex-row gap-8">
                <input
                  className="bg-gray-500 text-white h-[60px] outline-none pl-2 w-full text-[15px] rounded-sm focus: outline focus:outline-1 focus:outline-accent"
                  type="text"
                  name="clientName"
                  placeholder="Your name"
                />
                <input
                  className="bg-gray-500 text-white h-[60px] outline-none pl-2 w-full text-[15px] rounded-sm focus: outline focus:outline-1 focus:outline-accent"
                  type="email"
                  name="email"
                  placeholder="Your email"
                />
              </div>
              <input
                className="bg-gray-500 text-white h-[60px] outline-none pl-2 w-full text-[15px] rounded-sm focus: outline focus:outline-1 focus:outline-accent"
                type="text"
                placeholder="Subject"
              />
              <textarea
                className="bg-gray-500 text-white resize-none w-full outline-none p-2 rounded-sm h-[200px] focus: outline focus:outline-1 focus:outline-accent"
                name="message"
                placeholder="Your message"
              ></textarea>
              <button className="btn btn-lg block mx-auto bg-gray-500 hover:bg-gray-700">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
