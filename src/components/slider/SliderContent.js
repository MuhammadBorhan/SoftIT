import React from "react";
import { Link } from "react-router-dom";

const SliderContent = ({ activeIndex, sliderImage }) => {
  return (
    <section className="mt-20">
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <h2 className="slide-title text-3xl md:text-5xl ">{slide.title}</h2>
          <h3 className="slide-text text-xl md:text-2xl ">
            {slide.description}
          </h3>
          {/* <button
            style={{ zIndex: "1px" }}
            className=" button rounded hidden lg:block mt-24 -ml-8 lg:-ml-0 lg:mt-0"
          >
            <Link
              to={slide.details}
              className="slide_btn_a text-orange-500 font-bold"
            >
              GET STARTED
            </Link>
          </button> */}
        </div>
      ))}
      {/* <div className="overlay"></div> */}
    </section>
  );
};

export default SliderContent;
