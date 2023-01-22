import { itMatchesOne } from "daisyui/src/lib/postcss-prefixer/utils";
import React from "react";
import { teamMates } from "../../data";
import "./MeetWithTeam.css";

const MeetWithTeam = () => {
  return (
    <div className="px-10 py-12">
      <div className="text-center ">
        <h1 className="text-4xl capitalize pb-4 horizontal">Meet Our Team</h1>
        <p className="my-6 text-xl lg:w-3/5 mx-auto font-sans">
          The terms “computer skills” and “software skills” are often used
          interchangeably, as they refer to very similar knowledge. You can't
          have computer skills without knowing certain software programs.
        </p>
      </div>
      <div className="slider grid grid-cols-1 lg:grid-cols-4">
        {teamMates.map((team, index) => (
          <div className="card bg-neutral">
            <div className="card-top">
              <img
                className="w-40 h-40 object-cover"
                src={team.image}
                alt={team.name}
              />
              <h1 className="text-2xl bg-neutral text-white font-bold text-center py-1 uppercase">
                {team.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetWithTeam;
