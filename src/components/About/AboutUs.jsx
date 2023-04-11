import React from "react";
import Goal from "../Goal/Goal";
import Abouts from "./Abouts";
import Skills from "../Skills/Skills";
import "./AboutUs.css";
import { useState } from "react";

const AboutUs = () => {
  const items = [
    {
      title: "Why Comtech Solution Software?",
      content:
        "We also put aside 100% of our equity, 100% of our employees’ time, and 100% of our product, and formed the Salesforce.com Foundation. These two key decisions have fueled our incredible growth, made us the global leader in CRM, defined the era of cloud computing, and inspired a new philanthropic model for all to follow. Today, thanks to our dedicated employees, partners, and the customers we serve, our industry-leading CRM platform has become the worlds leading enterprise cloud ecosystem. Industries and companies of all sizes can connect to their customers in a whole new way using the latest innovations in mobile, social, and cloud technology to sell, service, market, and succeed like never before.",
    },
    {
      title: "Our Aim?",
      content:
        "Our Vision is to become the leading software company of our country with a sound reputation for dependability, professionalism and the highest standard of customer services. Bring innovation in software products Our Mission is to play a vital role in human development and employment opportunity. Providing One Stop Service.",
    },
    {
      title: "Company Profile?",
      content:
        "Confidence Software was established in January 2005. Since then, Confidence Software have consistently progressed and expanded operating in a diverse range of activities. Its primary goal was to develop customized software and provide the clients with any kind of software support. During the first year, Confidence Software developed a number of customized software for some renowned organizations. Currently a strong Confidence Software team, composed of enthusiastic, youthful, talented and highly motivated professionals is committed to give excellent client service. Confidence Software its strong business goodwill as blessing and uses it as the stairway to its future growth.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="mt-32">
      <Abouts />
      <Goal />
      <Skills />
      <div className="accordion mx-12">
        {items.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div
              className="accordion-header"
              onClick={() => handleClick(index)}
            >
              {item.title}
              <span className="accordion-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="accordion-content text-justify">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
