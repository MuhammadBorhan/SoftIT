import React from "react";
import "./Abouts.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="px-10 my-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl capitalize pb-2 horizontal">About Us</h1>
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
          <p
            className="text- lg:text-justify font-serif my-6"
            style={{ lineHeight: "35px" }}
          >
            Comtech Software was established in January 2022. Since then,
            Comtech Software have consistently progressed and expanded operating
            in a diverse range of activities. Its primary goal was to develop
            customized software and provide the clients with any kind of
            software support. During the first year, Comtech Software developed
            a number of customized software for some renowned organizations.
            Currently a strong Comtech Software team, composed of enthusiastic,
            youthful, talented and highly motivated professionals is committed
            to give excellent client service. Comtech Software its strong
            business goodwill as blessing and uses it as the stairway to its
            future growth
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
