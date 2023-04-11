import React from "react";
import HospitalCard from "./HospitalCard";

const Hospitals = () => {
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
        Hospitals
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-12">
        <HospitalCard
          img={
            "https://gomatihospital.com/wp-content/uploads/2022/08/LogoTransparent.png"
          }
          title={"Gomti Hospital (Pvt.) Ltd."}
        />
        <HospitalCard
          img={
            "https://seeklogo.com/images/B/bangladesh-medical-college-hospital-zone-logo-E75429DD14-seeklogo.com.png"
          }
          title={"Bangladesh Medical College & Hospital"}
        />
        <HospitalCard
          img={
            "https://cdn.dribbble.com/users/393931/screenshots/6436241/softwhere-dribbble_4x.png?compress=1&resize=400x300&vertical=top"
          }
          title={"Development Project Dhanmondi"}
        />
        <HospitalCard
          img={
            "https://cdn.dribbble.com/users/393931/screenshots/6436241/softwhere-dribbble_4x.png?compress=1&resize=400x300&vertical=top"
          }
          title={"Development Project Lalmatia"}
        />
      </div>
    </div>
  );
};

export default Hospitals;
