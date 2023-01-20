import React from "react";
import Banner from "../components/banner/Banner";
import { ChangeTitle } from "../utils/ChangeTitle";
import Abouts from "../components/About/Abouts";

const About = () => {
  ChangeTitle("About");
  return (
    <div className="">
      <Banner />
      <Abouts />
    </div>
  );
};

export default About;
