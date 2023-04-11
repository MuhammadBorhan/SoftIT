import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FakePage extends Component {
  state = {
    images: [
      {
        id: 1,
        url: "https://placeimg.com/640/480/nature/1",
        alt: "Nature 1",
      },
      {
        id: 2,
        url: "https://placeimg.com/640/480/nature/2",
        alt: "Nature 2",
      },
      {
        id: 3,
        url: "https://placeimg.com/640/480/nature/3",
        alt: "Nature 3",
      },
      {
        id: 4,
        url: "https://placeimg.com/640/480/nature/4",
        alt: "Nature 4",
      },
      {
        id: 5,
        url: "https://placeimg.com/640/480/nature/5",
        alt: "Nature 5",
      },
    ],
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="mt-20">
        {/* <h1>Dynamic Carousel Example</h1> */}
        <Slider {...settings}>
          {this.state.images.map((image) => (
            <div key={image.id}>
              <img src={image.url} alt={image.alt} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default FakePage;

// FakePage
