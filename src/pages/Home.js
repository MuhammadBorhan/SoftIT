import React from "react";
import CarouselSlider from "../components/CarouselSlider/CarouselSlider";
import Contact from "../components/Contact/Contact";
import Goal from "../components/Goal/Goal";
import Intro from "../components/Intro/Intro";
import MeetWithTeam from "../components/MeetWithTeam/MeetWithTeam";
import Services from "../components/Services/Services";
import Skills from "../components/Skills/Skills";
import Slider from "../components/slider/Slider";
import WhySoftIT from "../components/WhySoftIT/WhySoftIT";
import WorkedWith from "../components/WorkedWith/WorkedWith";
import WorkingStep from "../components/WorkingStep/WorkingStep";
import { ChangeTitle } from "../utils/ChangeTitle";
import Features from "../components/Features/Features";
import HeaderSlider from "../components/HeaderSlider/HeaderSlider";

const Home = () => {
  ChangeTitle("Home");
  return (
    <div className="">
      {/* <Slider /> */}
      <HeaderSlider />
      {/* <Goal /> */}
      <Intro />
      <Services />
      <Features />
      <WhySoftIT />
      <WorkingStep />
      <WorkedWith />
      {/* <Skills /> */}
      {/* <MeetWithTeam /> */}
      <CarouselSlider />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
