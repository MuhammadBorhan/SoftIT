import React from "react";
import Banner from "../components/banner/Banner";
import Projects from "../components/Project/Projects";
import { ChangeTitle } from "../utils/ChangeTitle";

const Portfolio = () => {
  ChangeTitle("Portfolio");
  return (
    <div className="mt-20">
      {/* <div>
        <Banner
          image="url('https://cdn.themexpert.com/images/easyblog_articles/2857/Banner.jpg')"
          title="Most software Company's need an online portfolio to establish credibility"
          text="Instead of just telling interviewers about your technical skillsets and expertise, a portfolio allows you to show them. Creating a portfolio site can seem daunting and time consuming."
        />
      </div> */}
      <section className="py-12 px-6 lg:px-0 bg-black">
        <div
          className="container mx-auto"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-white mb-5">
              Our latest work
            </h2>
            <p className=" mb-6 max-w-[520px] text-white">
              These are some of the many Wabe Page Designs and Full Stack
              projects We have over the past few days.
            </p>
          </div>
          <Projects />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
