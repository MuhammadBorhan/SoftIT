import React from "react";

const SliderContent = ({ activeIndex, sliderImage }) => {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <h2 className="slide-title text-3xl md:text-5xl">{slide.title}</h2>
          <h3 className="slide-text text-xl md:text-2xl">
            {slide.description}
          </h3>
        </div>
      ))}
      <div className="overlay"></div>
    </section>
  );
};

export default SliderContent;
