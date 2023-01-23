import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselSlider.css";
import Slider from "react-slick";
import products, { carouselProducts } from "./Products";

const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        {carouselProducts.map((item) => (
          <div className="card bg-neutral">
            <div className="card-top">
              <img className="w-40 h-40" src={item.link} alt={item.title} />
              <h1 className="text-2xl bg-neutral text-white font-bold text-center py-1 uppercase">
                {item.name}
              </h1>
            </div>
            {/* <div className="bg-neutral">
              {" "}
              <div className="card-bottom bg-neutral">
                <h3 className="text-3xl font-bold">{item.price}</h3>
                <p className="text-2xl">{item.category}</p>
              </div>
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
