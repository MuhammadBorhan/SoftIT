import React from "react";
import { Link } from "react-router-dom";

const SliderContent = ({ activeIndex, sliderImage }) => {
  return (
    <section>
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
          <button className="btn btn-primary button hidden lg:block mt-24 -ml-8 lg:-ml-0 lg:mt-0">
            <a target="_blank" href={slide.details}>
              GET STARTED
            </a>
          </button>
        </div>
      ))}
      <div className="overlay"></div>
    </section>
  );
};

export default SliderContent;
