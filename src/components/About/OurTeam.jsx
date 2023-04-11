import React from "react";
import { useState } from "react";
import "./OurTeam.css";
import MeetWithTeam from "../MeetWithTeam/MeetWithTeam";

const OurTeam = () => {
  return (
    <div className="mt-20">
      <div>
        <img
          className="w-full h-[300px]"
          src="https://envato-shoebox-0.imgix.net/14cb/0233-b9cd-4f04-bcd9-055939da0a44/IMG_983322.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=ebdc91173dfed3449508bdd026258645"
          alt=""
        />
      </div>
      <MeetWithTeam />
    </div>
  );
};

export default OurTeam;
