import React from "react";
import { useState } from "react";
import { progresPercent } from "../../data";
import "./Skills.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Skills = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="px-10 my-12">
      <div className="text-center ">
        <h1 className="text-4xl capitalize pb-4 horizontal">Our Skills</h1>
        <p className="my-6 text-xl lg:w-3/5 mx-auto font-sans">
          The terms “computer skills” and “software skills” are often used
          interchangeably, as they refer to very similar knowledge. You can't
          have computer skills without knowing certain software programs.
        </p>
      </div>
      <div
        className="px-0 lg:px-20"
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        {progresPercent.map((percent, index) => (
          <div key={index} className="bg-gray-300 rounded-full my-2">
            <div
              className="text-white font-bold text-xs flex justify-between items-center px-2 py-1 rounded-full"
              style={{
                width: percent.percent,
                backgroundColor: percent.color,
              }}
            >
              <span> {percent.name}</span>
              <span>{percent.percent}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 text-center items-center py-8">
            <div>
              <p className="text-5xl font-bold my-4">
                {" "}
                {counterOn && (
                  <CountUp start={0} end={50} duration={2.5} delay={0} />
                )}
                +
              </p>
              <p className="text-xl text-blue-400 font-bold">Our Staffs</p>
            </div>
            <div className="py-12 lg:py-0">
              <p className="text-5xl font-bold my-4">
                {counterOn && (
                  <CountUp start={0} end={150} duration={3.5} delay={0} />
                )}
                +
              </p>
              <p className="text-xl text-blue-400 font-bold">Our Clients</p>
            </div>
            <div className="pb-12 lg:pb-0">
              <p className="text-5xl font-bold my-4">
                {counterOn && (
                  <CountUp start={0} end={220} duration={4.5} delay={0} />
                )}
                +
              </p>
              <p className="text-xl text-blue-400 font-bold">
                Completed Projects
              </p>
            </div>
            <div className="pb-12 lg:pb-0">
              <p className="text-5xl font-bold my-4">
                {counterOn && (
                  <CountUp start={0} end={180} duration={3.5} delay={0} />
                )}
                +
              </p>
              <p className="text-xl text-blue-400 font-bold">
                Running Projects
              </p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default Skills;
