import React from "react";
import UiUxDesign from "../components/UiUxDesign/UiUxDesign";
import { ChangeTitle } from "../utils/ChangeTitle";

const UiUx = () => {
  ChangeTitle("UX/UI Design");
  return (
    <div>
      <UiUxDesign />
    </div>
  );
};

export default UiUx;
