import React from "react";
import EducationCard from "./EducationCard";
import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="pt-28 bg-gray-200">
      <h1
        className="text-center text-3xl font-bold uppercase pb-4"
        style={{
          borderBottom: "2px solid blue",
          width: "max-content",
          margin: "auto",
        }}
      >
        Education
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-12">
        <EducationCard
          img={
            "https://upload.wikimedia.org/wikipedia/en/b/b7/Dhaka_Dental_College_logo.png"
          }
          title={"Dhaka Dental College"}
        />
        <EducationCard
          img={
            "https://seeklogo.com/images/B/bangladesh-medical-college-hospital-zone-logo-E75429DD14-seeklogo.com.png"
          }
          title={"Bangladesh Medical College & Hospital"}
        />
        <EducationCard
          img={
            "https://play-lh.googleusercontent.com/uDTnyyJ8KeilvsHLVHOzLgOI0dM0fTzRTb_-7OyTV07leyK_L3aOuGp5-pHsZd96Lypu"
          }
          title={"Comilla Residential College"}
        />
        <EducationCard
          img={
            "https://cdn.dribbble.com/users/393931/screenshots/6436241/softwhere-dribbble_4x.png?compress=1&resize=400x300&vertical=top"
          }
          title={"Development Project Lalmatia"}
        />
      </div>
    </div>
  );
};

export default Education;
