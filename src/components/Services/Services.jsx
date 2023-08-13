import React, { useState } from "react";
import { BsCodeSlash, BsBarChart } from "react-icons/bs";
import { AiOutlineDesktop } from "react-icons/ai";
import { FaFileCode } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SiAltiumdesigner, SiMicrosoftsharepoint } from "react-icons/si";
import Service from "./Service";
import applmngt from "../../assets/serviceImg/aplmgmnt.PNG";
import apps from "../../assets/serviceImg/apps.PNG";
import business from "../../assets/serviceImg/business.PNG";
import db from "../../assets/serviceImg/db.PNG";
import insource from "../../assets/serviceImg/insource.PNG";
import quality from "../../assets/serviceImg/quality.PNG";
import soft from "../../assets/serviceImg/softw.PNG";
import web from "../../assets/serviceImg/web.PNG";

const Services = () => {
  return (
    <div className="lg:mt-16 ">
      <div className="bg-gray-200 py-8">
        <h1
          className="text-center text-xl md:text-2xl font-bold uppercase pb-2 md:pb-4"
          style={{
            borderBottom: "2px solid blue",
            width: "max-content",
            margin: "auto",
            marginBottom: "30px",
          }}
        >
          Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 px-10 gap-10 ">
          <Service
            title="Enterprise Application Development"
            desc="Premier and customized business applications and e-commerce solutions development services that safeguard organizational value, performance, and profitability."
            icon={
              <FaFileCode className="w-12 md:w-16 h-12 md:h-16 text-red-500 relative left-[45%] lg:left-[44%] top-4" />
            }
          />
          <Service
            title="Web & Mobile Application Development"
            desc="Extensible web and mobile application development for specific business needs with powerful functionality to retain more clients or optimize internal processes."
            icon={
              <AiOutlineDesktop className="w-12 md:w-16 h-12 md:h-16 text-red-500 relative left-[45%] lg:left-[44%] top-4" />
            }
          />
          <Service
            title="Business Intelligence & Data Mining"
            desc="Result-driven business intelligence by implementing ETL powered with data quality management and rich visualization."
            icon={
              <BsBarChart className="w-12 md:w-16 h-12 md:h-16 text-red-500 relative left-[45%] lg:left-[44%] top-4" />
            }
          />
          <Service
            title="Azure Application Development"
            desc="Azure application development and migration Services that ensures clean cloud experience."
            icon={
              <MdOutlineDeveloperMode className="w-12 md:w-16 h-12 md:h-16 text-red-500 relative left-[45%]  top-4" />
            }
          />
          <Service
            title="System Analysis & UX/UI Design"
            desc="User-centric design with distinctive brand identity and favorable impression driven by usability, scalability, and reliability."
            icon={
              <SiAltiumdesigner className="w-12 md:w-16 h-12 md:h-16 text-red-500 relative left-[45%] lg:left-[44%] top-4" />
            }
          />
          <Service
            title="Software Testing & Quality Assurance"
            desc="Testing and QA Services backed by a robust heritage of testing proficiency and recommended for extensive variety of testing services array and excellence of resources."
            icon={
              <SiMicrosoftsharepoint className="w-12 md:w-16 h-12 md:h-16 text-red-500 relative left-[45%] lg:left-[44%] top-4" />
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4 justify-center items-center md:gap-6 mt-4">
        <img src={applmngt} alt="image" className="w-[300px] mx-auto" />
        <img src={apps} alt="image" className="w-[300px] mx-auto hidden lg:block" />
        {/* <img src={business} alt="image" className="w-[300px] mx-auto " /> */}
        <img src={db} alt="image" className="w-[300px] mx-auto" />
        {/* <img src={insource} alt="image" className="w-[300px] mx-auto " /> */}
        <img src={quality} alt="image" className="w-[300px] mx-auto hidden md:block" />
        <img src={soft} alt="image" className="w-[300px] mx-auto" />
        <img src={web} alt="image" className="w-[300px] mx-auto" />
      </div>
    </div>
  );
};

export default Services;
