import React from "react";
import "./index.css";
import LEFT from "components/expander-item-left";
import MID from "components/expander-item-mid";
import RIGHT from "components/expander-item-right";

const Page = () => {
  return (
    <div className="home">
      <LEFT />
      <MID />
      <RIGHT />
    </div>
  );
};

export default Page;
