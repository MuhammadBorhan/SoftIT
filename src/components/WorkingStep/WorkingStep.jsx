import React from "react";
import { Fa500Px } from "react-icons/fa";

const WorkingStep = () => {
  return (
    <div className="bg-slate-200 py-12">
      <div className="text-center px-6 lg:px-0">
        <h1 className="text-4xl capitalize pb-4 horizontal">
          Our Working Process
        </h1>
        <p className="my-6 text-xl lg:w-3/5 mx-auto font-sans">
          We’ll start your project by reviewing your needs and expectations.
          We’ll then recommend the right approach, the budget, the growth to
          expect and timeline for the project.
        </p>
      </div>
      <div
        className="flex justify-center pt-10 "
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        <ul className="steps steps-vertical lg:steps-horizontal lg:w-full">
          <li data-content="?" className="step step-primary text-xl font-bold">
            Meeting
          </li>
          <li data-content="!" className="step step-primary text-xl font-bold">
            Planning
          </li>
          <li data-content="★" className="step step-primary text-xl font-bold">
            Designing
          </li>
          <li data-content="?" className="step step-primary text-xl font-bold">
            Developing
          </li>
          <li data-content="✓" className="step step-primary text-xl font-bold">
            Testing
          </li>
          <li data-content="●" className="step step-primary text-xl font-bold">
            Delivery
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkingStep;
