import React from "react";
import WebDevelop from "../components/WebDevelop/WebDevelop";
import { ChangeTitle } from "../utils/ChangeTitle";

const WebDevelopment = () => {
  ChangeTitle("Web Development");
  return (
    <div>
      <WebDevelop />
    </div>
  );
};

export default WebDevelopment;
