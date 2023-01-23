import React from "react";
import { AiOutlineSolution, AiTwotoneFileAdd } from "react-icons/ai";
import { SiExpensify } from "react-icons/si";
import { TfiSupport } from "react-icons/tfi";

const Intro = () => {
  return (
    <div className="lg:mb-[-400px]">
      <div className="grid grid-cols-12 p-0 lg:p-16 items-center">
        <div className="col-span-12 lg:col-span-9 shadow-none lg:shadow-md p-6 lg:p-8 lg:pr-60 bg-gray-100">
          <h1
            className="text-3xl font-bold mb-4 pb-3 max-w-fit lg:mx-0 mx-auto"
            style={{ borderBottom: "2px dashed" }}
          >
            A Little Intro
          </h1>
          <p className="text-justify text-xl">
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
              <li className="text-xl font-bold flex my-3 ">
                {" "}
                <AiOutlineSolution className="text-3xl font-bold text-orange-500 mr-2" />{" "}
                Well-engineered digital solutions
              </li>
              <li className="text-xl font-bold flex my-3">
                {" "}
                <AiTwotoneFileAdd className="text-3xl font-bold text-orange-500 mr-2" />{" "}
                Leading development platforms
              </li>
              <li className="text-xl font-bold flex my-3">
                {" "}
                <SiExpensify className="text-3xl font-bold text-orange-500 mr-2" />{" "}
                Professional experience
              </li>
              <li className="text-xl font-bold flex my-3">
                {" "}
                <TfiSupport className="text-3xl font-bold text-orange-500 mr-2" />{" "}
                Physically & Virtually support
              </li>
            </ul>
          </div>
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 block mx-auto lg:mx-0 rounded-full text-white font-bold text-xl">
            Hire Us For Next Project
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
