import React from "react";
import "./Abouts.css";

const About = () => {
  return (
    <div className="px-10 my-12">
      <div className="text-center ">
        <h1 className="text-4xl capitalize pb-4 horizontal">About Us</h1>
        <p className="my-6 text-xl lg:w-3/5 mx-auto font-sans">
          Software engineering is the branch of computer science that deals with
          the design, development, testing, and maintenance of software
          applications.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://www.springboard.com/blog/wp-content/uploads/2020/07/what-does-a-software-engineer-do.png"
            alt="image"
            className="rounded"
          />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-3xl text-indigo-500">Welcome To Our Site</h2>
          <p className="text-xl lg:text-justify font-serif my-6">
            As a software engineer, you'll need to: analyse user requirements.
            write and test code, refining and rewriting it as necessary and
            communicate with any programmers involved in the project. research,
            design and write new software programs (e.g. business applications
            or computer games) and computer operating systems.
          </p>
          <button className="px-2 py-1 bg-red-500">
            <a className="text-white" href="">
              Read More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
