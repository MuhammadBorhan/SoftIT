import React from "react";
import { ChangeTitle } from "../utils/ChangeTitle";

const About = () => {
  ChangeTitle("About");
  return <div className="mt-20 h-[800px]">This is about</div>;
};

export default About;
