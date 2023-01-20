import React from "react";
import { BsCodeSlash, BsBarChart } from "react-icons/bs";
import { AiOutlineDesktop } from "react-icons/ai";
import { FaFileCode } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SiAltiumdesigner, SiMicrosoftsharepoint } from "react-icons/si";
import Service from "./Service";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-10 my-16 gap-10 bg-slate-50 py-8">
      <Service
        title="Enterprise Application Development"
        desc="Premier and customized business applications and e-commerce solutions development services that safeguard organizational value, performance, and profitability."
        icon={
          <FaFileCode className="w-16 h-16 text-red-500 relative left-[44%] top-4" />
        }
      />
      <Service
        title="Web & Mobile Application Development"
        desc="Extensible web and mobile application development for specific business needs with powerful functionality to retain more clients or optimize internal processes."
        icon={
          <AiOutlineDesktop className="w-16 h-16 text-red-500 relative left-[44%] top-4" />
        }
      />
      <Service
        title="Business Intelligence & Data Mining"
        desc="Result-driven business intelligence by implementing ETL powered with data quality management and rich visualization."
        icon={
          <BsBarChart className="w-16 h-16 text-red-500 relative left-[44%] top-4" />
        }
      />
      <Service
        title="Azure Application Development"
        desc="Azure application development and migration Services that ensures clean cloud experience."
        icon={
          <MdOutlineDeveloperMode className="w-16 h-16 text-red-500 relative left-[44%] top-4" />
        }
      />
      <Service
        title="System Analysis & UX/UI Design"
        desc="User-centric design with distinctive brand identity and favorable impression driven by usability, scalability, and reliability."
        icon={
          <SiAltiumdesigner className="w-16 h-16 text-red-500 relative left-[44%] top-4" />
        }
      />
      <Service
        title="Software Testing & Quality Assurance"
        desc="Testing and QA Services backed by a robust heritage of testing proficiency and recommended for extensive variety of testing services array and excellence of resources."
        icon={
          <SiMicrosoftsharepoint className="w-16 h-16 text-red-500 relative left-[44%] top-4" />
        }
      />
    </div>
  );
};

export default Services;
