import React from "react";
import Banner from "../components/banner/Banner";
import { ChangeTitle } from "../utils/ChangeTitle";

const Contact = () => {
  ChangeTitle("Contact With Us");
  return (
    <div>
      <div>
        <Banner
          image="url('https://www.scnsoft.com/blog-pictures/software-development-outsourcing/sw-development-teams.png')"
          title="Software Products to Maximize Business Value"
          text="Instead of just telling interviewers about your technical skillsets and expertise, a portfolio allows you to show them. Creating a portfolio site can seem daunting and time consuming."
        />
      </div>
      <div className="px-12 mt-16">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl font-bold">Contact With Us</h2>
          <p className="">
            If you have any information please E-mail us.
            <br />
            or
            <br />
            Phone: +8801402723759
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div>
            <iframe
              // width="700"
              // height="500"
              className="w-full h-[300px] lg:h-[500px]"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Adarshanogor,badda,dhaka,1212&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
          <div className="flex flex-col justify-center lg:gap-x-8 lg:flex-row bg-gray-600 opacity-80 p-8">
            <form className="space-y-4 w-full max-w-[780px]">
              <div className="flex flex-col lg:flex-row gap-8">
                <input
                  className="bg-gray-500 text-white h-[60px] outline-none pl-2 w-full text-[15px] rounded-sm focus: outline focus:outline-1 focus:outline-accent"
                  type="text"
                  name="clientName"
                  placeholder="Your name"
                />
                <input
                  className="bg-gray-500 text-white h-[60px] outline-none pl-2 w-full text-[15px] rounded-sm focus: outline focus:outline-1 focus:outline-accent"
                  type="email"
                  name="email"
                  placeholder="Your email"
                />
              </div>
              <input
                className="bg-gray-500 text-white h-[60px] outline-none pl-2 w-full text-[15px] rounded-sm focus: outline focus:outline-1 focus:outline-accent"
                type="text"
                placeholder="Subject"
              />
              <textarea
                className="bg-gray-500 text-white resize-none w-full outline-none p-2 rounded-sm h-[200px] focus: outline focus:outline-1 focus:outline-accent"
                name="message"
                placeholder="Your message"
              ></textarea>
              <button className="btn btn-lg block mx-auto bg-gray-500 hover:bg-gray-700">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
