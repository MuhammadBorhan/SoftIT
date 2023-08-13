import { itMatchesOne } from "daisyui/src/lib/postcss-prefixer/utils";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { teamMates } from "../../data";
import "./MeetWithTeam.css";

const MeetWithTeam = () => {
  return (
    <div className="px-10 py-12 bg-slate-50">
      <div className="text-center ">
        <h1 className="text-xl md:text-3xl capitalize pb-4 horizontal">
          Meet Our Team
        </h1>
        <p className="my-6  lg:w-3/5 mx-auto font-sans">
          The terms “computer skills” and “software skills” are often used
          interchangeably, as they refer to very similar knowledge. You can't
          have computer skills without knowing certain software programs.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:px-12 gap-y-10">
        {teamMates.map((team, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl"
            data-aos="flip-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <figure className="imgLayer">
              <img src={team.image} alt="Shoes" className="w-full h-52" />
              <div className="layer"></div>
            </figure>
            <p className="figcaption">{team.position}</p>
            <div className="card-body bg-gray-200 text-black hover:bg-green-500 hover:text-white transition-all items-center text-center">
              <h2 className="card-title">{team.name}</h2>
              <p>{team.position}</p>
              <div className="grid grid-cols-4 justify-center items-center gap-2">
                {team.media.map((data, index) => (
                  <div key={index} className="hover:[transform:scale(1.7)]">
                    <a target="_blank" href={data.link} className="">
                      {data.name === "facebook" && <FaFacebook />}
                    </a>
                    <a target="_blank" href={data.link}>
                      {data.name === "linkedin" && <FaLinkedin />}
                    </a>
                    <a target="_blank" href={data.link}>
                      {data.name === "instagram" && <FaInstagram />}
                    </a>
                    <a target="_blank" href={data.link}>
                      {data.name === "twitter" && <FaTwitter />}
                    </a>
                  </div>
                ))}
              </div>
              {/* <a href={""}>
                <FaFacebook />
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetWithTeam;
