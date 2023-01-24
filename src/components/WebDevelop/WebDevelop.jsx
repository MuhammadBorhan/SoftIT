import React from "react";
import "./WebDevelop.css";

const WebDevelop = ({ title, text }) => {
  return (
    <div>
      <div>
        <div className="bg_web">
          <div className="flex justify-center px-6 lg:px-12 flex-col gap-y-4 items-center h-screen">
            <h1 className="zIndex text-white mb-32 bg-gray-500 p-2 rounded text-2xl lg:text-5xl text-center">
              {title}
            </h1>
            <p className="zIndex text-center  lg:text-2xl text-white">{text}</p>
          </div>
        </div>
        <div className="overlay_web"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 p-12 justify-center items-center gap-10 bg-slate-200">
        <div>
          <h1 className="text-orange-500 font-bold text-3xl mb-4 text-center lg:text-left">
            MOBILE APP DESIGN
          </h1>
          <p className="text-xl font-mono text-justify">
            Right from the idea development stage to the final product, we focus
            on creating user-focused mobile apps that will meet the needs of
            your customers. Our mobile app design approach is aimed at
            addressing the specific needs of your users. The apps that we design
            are a blend of function and aesthetic so that your customers can
            keep coming back for more.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://cdn.dribbble.com/users/1615584/screenshots/15571949/media/7e95f0fddb7957220033569815613b10.jpg?compress=1&resize=400x300&vertical=top"
            alt="mobile app design"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 p-12 justify-center items-center gap-10 bg-sky-100">
        <div className="flex justify-center items-center row-start-2 lg:row-start-1">
          <img
            src="https://img.freepik.com/free-vector/cartoon-web-design-background_52683-70879.jpg?w=2000"
            alt="mobile app design"
          />
        </div>
        <div className="row-start-1 lg:row-end-2">
          <h1 className="text-orange-500 font-bold text-3xl mb-4 text-center lg:text-left">
            WEB APP DESIGN
          </h1>
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
          <h1 className="text-orange-500 font-bold text-3xl mb-4 text-center lg:text-left">
            E-COMMERCE FRONT DESIGN
          </h1>
          <p className="text-xl font-mono text-justify">
            Orange Toolz creates ecommerce designs that boost growth, propel
            sales and drives profitable ROI. Our team of innovative and creative
            programmers and designers will help you launch a store front that is
            easily maintained, flexible, scalable and responsive
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://cdn.dribbble.com/users/1254731/screenshots/16899784/media/9d83b579cc6279663ac0324bfc15d94f.jpg?compress=1&resize=400x300"
            alt="mobile app design"
          />
        </div>
      </div>

      <div className="p-12">
        <div
          className="p-8 flex gap-y-4 lg:gap-y-0 flex-col lg:flex-row items-center justify-between"
          style={{ border: "3px dashed orange" }}
        >
          <div>
            <h1 className="text-3xl font-bold mb-3">Do you like our works?</h1>
            <p className="text-xl text-justify lg:w-[920px] font-sans">
              Contact us today to learn more about how we can use our UI / UX
              design solutions to help you meet your business goals.
            </p>
          </div>
          <div>
            <button className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800 px-20 py-2 block mx-auto lg:mx-0 rounded-full text-white font-bold text-xl">
              Hire Us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelop;
