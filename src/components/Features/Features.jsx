import React from "react";
import Feature from "./Feature";
import { SiAltiumdesigner, SiAlwaysdata } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { FcMultipleDevices } from "react-icons/fc";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { MdAutoAwesomeMotion } from "react-icons/md";
// import { SiAlwaysdata } from "react-icons/si";
import { IoMdOptions } from "react-icons/io";

const Features = () => {
  return (
    <div className="p-12">
      <h1
        className="text-center text-3xl font-bold uppercase pb-4"
        style={{
          borderBottom: "2px solid blue",
          width: "max-content",
          margin: "auto",
          //   marginBottom: "10px",
        }}
      >
        Features
      </h1>
      <p className="py-6 lg:w-[800px] text-center mx-auto">
        We develop responsive website and powerful complete management and
        accounting software for clients like insurance, hospital, educational
        organizations and etc
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        <Feature icon={<SiAltiumdesigner />} title="Creative Design" />
        <Feature icon={<DiResponsive />} title="Responsive Layouts" />
        <Feature icon={<FcMultipleDevices />} title="Multiple Work" />
        <Feature icon={<AiFillCodeSandboxCircle />} title="Quality code" />
        <Feature icon={<MdAutoAwesomeMotion />} title="Awesome Support" />
        <Feature icon={<IoMdOptions />} title="Team Work" />
        <Feature icon={<IoMdOptions />} title="Multiple Options" />
        <Feature icon={<IoMdOptions />} title="Support Always" />
      </div>
    </div>
  );
};

export default Features;
