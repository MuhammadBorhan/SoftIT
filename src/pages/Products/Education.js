import React from "react";
import InsuranceCard from "./InsuranceCard";
import {
  MdAdminPanelSettings,
  MdManageAccounts,
  MdCastForEducation,
} from "react-icons/md";
import {
  AiTwotoneInsurance,
  AiOutlineAreaChart,
  AiOutlineFund,
} from "react-icons/ai";
import {
  GiRollingEnergy,
  GiBud,
  GiNotebook,
  GiMissilePod,
  GiBookshelf,
} from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { SiFdroid } from "react-icons/si";
import "./Education.css";

const Education = () => {
  return (
    <div>
      <div>
        <div className="edu_web"></div>
        <div className="overlay_web"></div>
      </div>
      <div className="mt-28 grid grid-cols-3 lg:grid-cols-6 px-12 gap-4">
        <p className="hidden lg:block">
          <InsuranceCard
            icon={<MdAdminPanelSettings size={80} />}
            title="Admin"
            color="b"
          />
        </p>
        <p className="block lg:hidden">
          <InsuranceCard
            icon={<MdAdminPanelSettings size={50} />}
            title="Admin"
            color="b"
          />
        </p>
        <p className="hidden lg:block">
          {" "}
          <InsuranceCard
            icon={<MdCastForEducation size={80} />}
            title="Education"
            color="ed"
          />
        </p>
        <p className="block lg:hidden">
          {" "}
          <InsuranceCard
            icon={<MdCastForEducation size={50} />}
            title="Education"
            color="ed"
          />
        </p>
        <p className="hidden lg:block">
          {" "}
          <InsuranceCard
            icon={<GiBookshelf size={80} />}
            title="Library"
            color="li"
          />
        </p>
        <p className="block lg:hidden">
          {" "}
          <InsuranceCard
            icon={<GiBookshelf size={50} />}
            title="Library"
            color="li"
          />
        </p>
        <p className="hidden lg:block">
          {" "}
          <InsuranceCard
            icon={<MdManageAccounts size={80} />}
            title="Accounts"
            color="g"
          />
        </p>
        <p className="block lg:hidden">
          {" "}
          <InsuranceCard
            icon={<MdManageAccounts size={50} />}
            title="Accounts"
            color="g"
          />
        </p>
        <p className="hidden lg:block">
          <InsuranceCard
            icon={<GiRollingEnergy size={80} />}
            title="Payroll"
            color="p"
          />
        </p>
        <p className="block lg:hidden">
          <InsuranceCard
            icon={<GiRollingEnergy size={50} />}
            title="Payroll"
            color="p"
          />
        </p>
        <p className="hidden lg:block">
          <InsuranceCard icon={<FaUsers size={80} />} title="HR" color="e" />
        </p>
        <p className="block lg:hidden">
          <InsuranceCard icon={<FaUsers size={50} />} title="HR" color="e" />
        </p>
        <p className="hidden lg:block">
          <InsuranceCard icon={<GiBud size={80} />} title="Budget" color="y" />
        </p>
        <p className="block lg:hidden">
          <InsuranceCard icon={<GiBud size={50} />} title="Budget" color="y" />
        </p>
        <p className="hidden lg:block">
          {" "}
          <InsuranceCard
            icon={<AiOutlineAreaChart size={80} />}
            title="Utility Bill"
            color="bl"
          />
        </p>
        <p className="block lg:hidden">
          {" "}
          <InsuranceCard
            icon={<AiOutlineAreaChart size={50} />}
            title="Ulity Bill"
            color="bl"
          />
        </p>
        <p className="hidden lg:block">
          <InsuranceCard icon={<SiFdroid size={80} />} title="FDR" color="r" />
        </p>
        <p className="block lg:hidden">
          <InsuranceCard icon={<SiFdroid size={50} />} title="FDR" color="r" />
        </p>
        <p className="hidden lg:block">
          <InsuranceCard
            icon={<GiNotebook size={80} />}
            title="Office Note"
            color="e"
          />
        </p>
        <p className="block lg:hidden">
          <InsuranceCard
            icon={<GiNotebook size={50} />}
            title="Note"
            color="e"
          />
        </p>
        <p className="hidden lg:block">
          {" "}
          <InsuranceCard
            icon={<GiMissilePod size={80} />}
            title="MIS"
            color="e"
          />
        </p>
        <p className="block lg:hidden">
          {" "}
          <InsuranceCard
            icon={<GiMissilePod size={50} />}
            title="MIS"
            color="e"
          />
        </p>
        <p className="hidden lg:block">
          {" "}
          <InsuranceCard
            icon={<AiOutlineFund size={80} />}
            title="Provident Fund"
            color="e"
          />
        </p>
        <p className="block lg:hidden">
          {" "}
          <InsuranceCard
            icon={<AiOutlineFund size={50} />}
            title="Fund"
            color="e"
          />
        </p>
      </div>
    </div>
  );
};

export default Education;
