import React from "react";
import "./UiUxDesign.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiCss3, SiMongodb } from "react-icons/si";
import { FaPhp, FaReact, FaNodeJs } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

const UiUxDesign = ({ title, text }) => {
  return (
    <div className="">
      <div>
        <div className="bg_uiux">
          <div className="flex justify-center px-6 lg:px-12 mt-20 flex-col gap-y-4 items-center h-screen">
            <h1 className="zIndex text-white text-2xl lg:text-5xl text-center">
              {title}
            </h1>
            <p className="zIndex text-center lg:text-2xl text-white">{text}</p>
          </div>
        </div>
        <div className="overlay_uiux"></div>
      </div>

      <div className="bg-gray-100 p-12">
        <p className="text-justify">
          Software Development is the proces of conceiving, specifying,
          designing, programming, documenting, testing, and bug fixing involved
          in createing and maintaingng applications, frameworks, or other
          software components. Software can be developed for a veriety of
          purpose.
        </p>
        <div>
          <h1 className="text-green-600 uppercase font-bold my-2 text-xl lg:text-2xl">
            Technologies we use
          </h1>
          <p className="text-green-400 font-bold">
            Comtech Solution Limited company has expirenced
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="bg-white shadow-md flex flex-col justify-between py-12 h-[200px] items-center">
              <p className="text-orange-600">
                {" "}
                <AiOutlineHtml5 className="hidden lg:block" size={100} />
                <AiOutlineHtml5 className="block lg:hidden" size={60} />
              </p>
              <h4 className="font-bold uppercase">Html 5</h4>
            </div>
            <div className="bg-white shadow-md flex flex-col justify-between py-12 h-[200px] items-center">
              <p className="text-blue-400">
                <SiCss3 className="hidden lg:block" size={100} />
                <SiCss3 className="block lg:hidden" size={60} />
              </p>
              <h4 className="font-bold uppercase">CSS3</h4>
            </div>
            <div className="bg-white shadow-md flex flex-col justify-between py-10 h-[200px] items-center">
              <p>
                <img
                  className="w-[150px]"
                  src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
                  alt=""
                />
              </p>
              <h4 className="font-bold">Oracle</h4>
            </div>
            <div className="bg-white shadow-md flex flex-col justify-between py-12 h-[200px] items-center">
              <p className="text-black">
                <TbBrandNextjs className="hidden lg:block" size={100} />
                <TbBrandNextjs className="block lg:hidden" size={60} />
              </p>
              <h4 className="font-bold">Nextjs</h4>
            </div>
            <div className="bg-white shadow-md flex flex-col justify-between py-12 h-[200px] items-center">
              <p className="text-green-600">
                <SiMongodb className="hidden lg:block" size={100} />
                <SiMongodb className="block lg:hidden" size={60} />
              </p>
              <h4 className="font-bold uppercase">MongoDB</h4>
            </div>
            <div className="bg-white shadow-md flex flex-col justify-between py-12 h-[200px] items-center">
              <p className="text-green-400">
                <FaNodeJs className="hidden lg:block" size={100} />
                <FaNodeJs className="block lg:hidden" size={60} />
              </p>
              <h4 className="font-bold uppercase">NodeJS</h4>
            </div>

            <div className="bg-white shadow-md flex flex-col justify-between py-12 h-[200px] items-center">
              <p className="text-blue-800">
                <FaPhp className="hidden lg:block" size={100} />
                <FaPhp className="block lg:hidden" size={60} />
              </p>
              <h4 className="font-bold">PHP</h4>
            </div>
            <div className="bg-white shadow-md flex flex-col justify-between py-10 h-[200px] items-center">
              <p>
                <img
                  className="w-[150px]"
                  src="https://magnusminds.net/images/services/mysql.svg"
                  alt=""
                />
              </p>
              <h4 className="font-bold uppercase">MySQL</h4>
            </div>
            <div className="bg-white shadow-md flex flex-col justify-between py-12 h-[200px] items-center">
              <p className="text-blue-500">
                <FaReact className="hidden lg:block" size={100} />
                <FaReact className="block lg:hidden" size={60} />
              </p>
              <h4 className="font-bold uppercase">React</h4>
            </div>
            <div className="bg-white shadow-md flex flex-col justify-between py-12 h-[200px] items-center">
              <p className="text-yellow-500">
                <DiJavascript1 className="hidden lg:block" size={100} />
                <DiJavascript1 className="block lg:hidden" size={60} />
              </p>
              <h4 className="font-bold uppercase">Javascript</h4>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-xl lg:text-2xl font-bold bg-gray-100 px-12 pb-4">
        Software Design & Development Services
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 p-12 justify-center items-center gap-10 bg-sky-100">
        <div className="flex justify-center items-center row-start-2 lg:row-start-1">
          <img
            src="https://www.itprotoday.com/sites/itprotoday.com/files/software-development-button.jpg"
            alt="mobile app design"
          />
        </div>
        <div className="row-start-1 lg:row-end-2">
          <p className="text-xl font-mono text-justify">
            We help design the latest portal technology for your business. We
            also use the right portal services to effectively steer your brand
            in the right direction that will help you actualize your business
            goals. From initial planning to the implementation of products,
            Orange Toolz offers one-stop solution for all your portal needs. We
            have an enviable reputation of delivering professional portal
            projects to organizations of different sizes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 p-12 justify-center items-center gap-10 bg-slate-200">
        <div>
          <p className="text-xl font-mono text-justify">
            Orange Toolz creates ecommerce designs that boost growth, propel
            sales and drives profitable ROI. Our team of innovative and creative
            programmers and designers will help you launch a store front that is
            easily maintained, flexible, scalable and responsive
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://www.ge.com/research/sites/default/files/styles/hero_banner/public/images/capabilities/2018-11/industry-3087393__480.jpg?itok=PThSdE_F"
            alt="mobile app design"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 p-12 justify-center items-center gap-10 bg-sky-100">
        <div className="flex justify-center items-center row-start-2 lg:row-start-1">
          <img
            src="https://www.isquarebs.com/blog/wp-content/uploads/2022/12/Custom-software-development.jpg"
            alt="mobile app design"
          />
        </div>
        <div className="row-start-1 lg:row-end-2">
          <p className="text-xl font-mono text-justify">
            We help design the latest portal technology for your business. We
            also use the right portal services to effectively steer your brand
            in the right direction that will help you actualize your business
            goals. From initial planning to the implementation of products,
            Orange Toolz offers one-stop solution for all your portal needs. We
            have an enviable reputation of delivering professional portal
            projects to organizations of different sizes.
          </p>
        </div>
      </div>

      <div className="p-12">
        <div
          className="py-4 px-4 lg:px-0 mb-0 flex flex-col  items-center justify-between"
          style={{ border: "3px dashed orange" }}
        >
          <div>
            <h1 className="text-sm lg:text-xl font-bold mb-2 ">
              Do you like our works?
            </h1>
            <p className=" text-justify font-sans">
              Contact us today to learn more about how we can use our UI / UX
              design solutions to help you meet your business goals.
            </p>
          </div>
          <div>
            <button className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800 px-2 lg:px-20 py-2 block mx-auto lg:mx-0 rounded-full text-white font-bold mt-4">
              Hire Us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiUxDesign;
