import React from "react";
import Banner from "../components/banner/Banner";
import ChoosePrice from "../components/ChoosePrice/ChoosePrice";
import { ChangeTitle } from "../utils/ChangeTitle";

const Price = () => {
  ChangeTitle("Price");
  return (
    <div>
      <div>
        <Banner image="url('http://sombrainc.com/wp-content/uploads/2018/12/1.png')" />
      </div>
      <div className="px-16 py-12">
        <div className="text-center ">
          <h1 className="text-4xl capitalize pb-4 horizontal">Our Pricing</h1>
          <p className="my-6 text-xl lg:w-3/5 mx-auto font-sans">
            Based on our experience, the ballpark range of software development
            costs is between $50,000 to $250,000. The lower price tag fits a
            simple app that takes less than 700 hours to develop.
          </p>
        </div>
        <ChoosePrice />
      </div>
    </div>
  );
};

export default Price;
