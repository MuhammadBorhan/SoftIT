import React from "react";

const Contact = () => {
  return (
    <div className="px-12 mt-16">
      <div className="flex flex-col items-center text-center mb-8">
        <h2 className="text-3xl font-bold">
          You can visit our office using this location
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 items-center gap-10">
        <div>
          <iframe
            // width="700"
            // height="500"
            className="w-full h-[300px] lg:h-[500px]"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Adarshanogor,badda,dhaka,1212&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
        {/* <div className="flex flex-col justify-center lg:gap-x-8 lg:flex-row bg-gray-600 opacity-80 p-8">
          <form className="space-y-4 w-full max-w-[780px]">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 ">
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
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
