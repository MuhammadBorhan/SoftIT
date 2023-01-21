import React from "react";
import Banner from "../components/banner/Banner";
import { ChangeTitle } from "../utils/ChangeTitle";
import Abouts from "../components/About/Abouts";

const About = () => {
  ChangeTitle("About");
  return (
    <div className="">
      <Banner image="url('https://artoftesting.com/wp-content/uploads/2020/01/software-engineering-featured.jpg')" />
      <Abouts />
    </div>
  );
};

export default About;
