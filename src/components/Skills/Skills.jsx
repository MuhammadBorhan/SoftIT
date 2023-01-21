import React from "react";
import { progresPercent } from "../../data";
import "./Skills.css";

const Skills = () => {
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
      <div className="px-0 lg:px-20">
        {progresPercent.map((percent) => (
          <div key={percent} className="bg-gray-300 rounded-full my-2">
            <div
              className="text-white font-bold flex justify-between items-center px-2 py-1 rounded-full"
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
    </div>
  );
};

export default Skills;
