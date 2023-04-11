import React from "react";
import InsuranceCard from "./InsuranceCard";

const Insurance = () => {
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
        Insurance
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-12">
        <InsuranceCard
          img={
            "https://static1.eyellowpages.ph/uploads/yp_business/photo/179950/normal_1539843750-pioneer.png"
          }
          title={"Pioneer Insurance Company Limited"}
        />
        <InsuranceCard
          img={"https://www.csoft.com.bd/assets/insurance/icon/provati.jpg"}
          title={"Provati Insurance Company Limited"}
        />
        <InsuranceCard
          img={"https://www.csoft.com.bd/assets/insurance/icon/prime.png"}
          title={"Prime Insurance Company Limited"}
        />
        <InsuranceCard
          img={
            "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/xzqzlm2swd07nxsbolna"
          }
          title={"City Insurance Company Limited"}
        />
        <InsuranceCard
          img={"https://rupalilife.com/Media/Uploads/interface/RliBannerbn.png"}
          title={"Rupali Insurance Company Limited"}
        />
        <InsuranceCard
          img={
            "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/rz5wlesvypctezedr6ku"
          }
          title={"Asia Insurance Company Limited"}
        />
        <InsuranceCard
          img={"https://www.nitolinsurance.com/assets/images/LOGO%20MAIN.png"}
          title={"Nitol Insurance Company Limited"}
        />
        <InsuranceCard
          img={
            "https://prod-media-eng.dhakatribune.com/uploads/2021/09/sonar-bangla-insurance-1631615583989.jpg"
          }
          title={"Sonar Bangla Insurance Company Limited"}
        />
      </div>
    </div>
  );
};

export default Insurance;
