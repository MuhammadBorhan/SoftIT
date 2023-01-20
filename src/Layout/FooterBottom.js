import React from "react";

const FooterBottom = () => {
  return (
    <div className="bg-black h-44 flex items-end justify-center pb-6">
      <p className="text-center font-sans text-white">
        Copyright &copy; {new Date().getFullYear()} , All Rights Reserved By
        SoftIT Solution
      </p>
    </div>
  );
};

export default FooterBottom;
