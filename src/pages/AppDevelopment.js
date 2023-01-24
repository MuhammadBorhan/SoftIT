import React from "react";
import AppDevelop from "../components/AppDevelop/AppDevelop";
import { ChangeTitle } from "../utils/ChangeTitle";

const AppDevelopment = () => {
  ChangeTitle("App Development");
  return (
    <div>
      <AppDevelop title="App Development" />
    </div>
  );
};

export default AppDevelopment;
