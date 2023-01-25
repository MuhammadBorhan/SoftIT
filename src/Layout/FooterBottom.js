import React from "react";
import ScrollToTop from "react-scroll-to-top";

const FooterBottom = () => {
  return (
    <div className="bg-black h-44 flex items-end justify-center pb-6">
      <ScrollToTop
        smooth
        width=""
        height="24"
        top={28}
        color="white"
        style={{ backgroundColor: "#3E8AB6", paddingTop: "7px" }}
      />
      <p className="text-center font-sans text-white">
        Copyright &copy; {new Date().getFullYear()} , All Rights Reserved By
        COMTECH Solution Limited
      </p>
    </div>
  );
};

export default FooterBottom;
