import React from "react";
import Goal from "../components/Goal/Goal";
import Services from "../components/Services/Services";
import Skills from "../components/Skills/Skills";
import Slider from "../components/slider/Slider";
import WhySoftIT from "../components/WhySoftIT/WhySoftIT";
import WorkedWith from "../components/WorkedWith/WorkedWith";
import { ChangeTitle } from "../utils/ChangeTitle";

const Home = () => {
  ChangeTitle("Home");
  return (
    <div className="">
      <Slider />
      <Goal />
      <Services />
      <WhySoftIT />
      <WorkedWith />
      <Skills />
    </div>
  );
};

export default Home;
