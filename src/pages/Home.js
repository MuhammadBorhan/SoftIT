import React from "react";
import Slider from "../components/slider/Slider";
import { ChangeTitle } from "../utils/ChangeTitle";

const Home = () => {
  ChangeTitle("Home");
  return (
    <div className="mt-20 lg:mt-0">
      <Slider />
    </div>
  );
};

export default Home;
