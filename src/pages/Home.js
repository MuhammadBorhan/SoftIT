import React from "react";
import Goal from "../components/Goal/Goal";
import Services from "../components/Services/Services";
import Slider from "../components/slider/Slider";
import { ChangeTitle } from "../utils/ChangeTitle";

const Home = () => {
  ChangeTitle("Home");
  return (
    <div className="">
      <Slider />
      <Goal />
      <Services />
    </div>
  );
};

export default Home;
