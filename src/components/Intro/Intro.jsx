import React from "react";
import { AiOutlineSolution, AiTwotoneFileAdd } from "react-icons/ai";
import { SiExpensify } from "react-icons/si";
import { TfiSupport } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="lg:mb-[-400px]">
      <div className="grid grid-cols-12 p-0 lg:p-16 items-center">
        <div className="col-span-12 lg:col-span-9 shadow-none lg:shadow-md p-6 lg:p-8 lg:pr-60 bg-gray-100">
          <h1
            className="text-xl md:text-2xl font-bold mb-4 pb-3 max-w-fit lg:mx-0 mx-auto"
            style={{ borderBottom: "2px dashed" }}
          >
            A Little Intro About Organization
          </h1>
          <p className="text-justify text-">
            OrangeToolz is a digital agency (for apps, web and SaaS) that
            develops solutions that are aimed at achieving high ROI. As a
            leading digital agency, our core competencies are technology
            solutions. We are experts in all types of web development, custom
            web-based solutions and app development amongst others. We focus on
            providing well-engineered solutions for clients at affordable rates.
            Our goal is to use latest technologies that will help us to exceed
            your expectations. Orange Toolz is genuinely devoted to your success
            and aims to build long-lasting relationships with you through the
            delivery of tangible results.
          </p>
          <div className="py-6">
            <ul className="grid grid-cols-1 lg:grid-cols-2">
              <li className=" font-bold flex my-3 ">
                {" "}
                <AiOutlineSolution className="text-xl md:text-3xl font-bold text-orange-500 mr-2" />{" "}
                <span className="md:text-xl">
                  {" "}
                  Well-engineered digital solutions
                </span>
              </li>
              <li className=" font-bold flex my-3">
                {" "}
                <AiTwotoneFileAdd className="text-xl md:text-3xl font-bold text-orange-500 mr-2" />{" "}
                <span className="md:text-xl">
                  Leading development platforms
                </span>
              </li>
              <li className="font-bold flex my-3">
                {" "}
                <SiExpensify className="text-xl md:text-3xl font-bold text-orange-500 mr-2" />{" "}
                <span className="md:text-xl">Professional experience</span>
              </li>
              <li className="font-bold flex my-3">
                {" "}
                <TfiSupport className="text-xl md:text-3xl font-bold text-orange-500 mr-2" />{" "}
                <span className="md:text-xl">
                  Physically & Virtually support
                </span>
              </li>
            </ul>
          </div>
          <button className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800 px-4 py-2 block mx-auto lg:mx-0 rounded-full text-white font-bold text-sm md:text-xl">
            <Link to="/contact">Hire us for next project</Link>
          </button>
        </div>
      </div>
      <div className="relative bottom-[520px] left-[900px]">
        <img
          src="https://www.softwaresuggest.com/blog/wp-content/uploads/2019/04/Effective-method-to-Choose-Employee-Performance-Software-That-Eases-HR-Pain-Points-ss-blog.png"
          alt="hire us"
          className="hidden lg:block w-[550px] h-[350px]"
        />
      </div>
    </div>
  );
};

export default Intro;
