import React from "react";
import Banner from "../components/banner/Banner";
import { ChangeTitle } from "../utils/ChangeTitle";
import Abouts from "../components/About/Abouts";
import Goal from "../components/Goal/Goal";

const About = () => {
  ChangeTitle("About");
  return (
    <div className="">
      <Banner
        image="url('https://artoftesting.com/wp-content/uploads/2020/01/software-engineering-featured.jpg')"
        title="Software Products to Maximize Business Value"
        text="Instead of just telling interviewers about your technical skillsets and expertise, a portfolio allows you to show them. Creating a portfolio site can seem daunting and time consuming."
      />
      <Abouts />
      <Goal />
    </div>
  );
};

export default About;
