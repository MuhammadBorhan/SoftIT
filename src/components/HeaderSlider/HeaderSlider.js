import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { heroSlider } from "./HeaderSliderImage";

const HeaderSlider = () => {
  return (
    <div className="mt-20">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={true}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        // navigation={true}
        // className="heroSlider"
      >
        {heroSlider?.map((slide, index) => {
          // destructure slide
          const { image } = slide;
          return (
            <SwiperSlide className="" key={index}>
              <div className="">
                <div className="pb-4 px-lg-5">
                  <img
                    style={{ width: "100%" }}
                    src={image}
                    alt=""
                    className="object-center h-[200px] md:h-[400px]"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeaderSlider;
