import React from "react";
import Goal from "../components/Goal/Goal";
import Services from "../components/Services/Services";
import Slider from "../components/slider/Slider";
import WhySoftIT from "../components/WhySoftIT/WhySoftIT";
import { ChangeTitle } from "../utils/ChangeTitle";

const Home = () => {
  ChangeTitle("Home");
  return (
    <div className="">
      <Slider />
      <Goal />
      <Services />
      <WhySoftIT />
    </div>
  );
};

export default Home;
