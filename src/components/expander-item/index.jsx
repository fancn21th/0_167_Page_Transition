import React from "react";
import "./index.css";

const ExpanderItem = ({ width = "400px", height = "400px" }) => {
  return (
    <div
      className="expander-item"
      style={{
        width,
        height,
      }}
    >
      <div className="expander-item__image-container"></div>
    </div>
  );
};

export default ExpanderItem;
