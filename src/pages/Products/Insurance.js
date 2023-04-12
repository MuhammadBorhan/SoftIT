import React from "react";
import InsuranceCard from "./InsuranceCard";
import { MdAdminPanelSettings, MdManageAccounts } from "react-icons/md";
import { AiTwotoneInsurance } from "react-icons/ai";
import { GiRollingEnergy } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import "./Insurance.css";

const Insurance = () => {
  return (
    <div>
      <div>
        <div className="bg_web"></div>
        <div className="overlay_web"></div>
      </div>
      <div className="mt-28 grid grid-cols-3 lg:grid-cols-6 px-12 gap-4">
        <InsuranceCard
          icon={<MdAdminPanelSettings size={80} />}
          title="Admin"
        />
        <InsuranceCard icon={<MdManageAccounts size={80} />} title="Accounts" />
        <InsuranceCard
          icon={<AiTwotoneInsurance size={80} />}
          title="Co-Insurance"
        />
        <InsuranceCard
          icon={<AiTwotoneInsurance size={80} />}
          title="Re-Insurance"
        />
        <InsuranceCard icon={<GiRollingEnergy size={80} />} title="Payroll" />
        <InsuranceCard icon={<FaUsers size={80} />} title="HR" />
        <InsuranceCard
          icon={<MdAdminPanelSettings size={80} />}
          title="Budget"
        />
        <InsuranceCard
          icon={<MdAdminPanelSettings size={80} />}
          title="Utility Bill"
        />
        <InsuranceCard icon={<MdAdminPanelSettings size={80} />} title="FDR" />
        <InsuranceCard
          icon={<MdAdminPanelSettings size={80} />}
          title="Office Note"
        />
      </div>
    </div>
  );
};

export default Insurance;
