import React, { useEffect } from "react";
import { gsap } from "gsap";
import LEFT from "./components/expander-item-left";
import MID from "./components/expander-item-mid";
import RIGHT from "./components/expander-item-right";

const Expander = () => {
  const left = React.createRef();
  const mid = React.createRef();
  const right = React.createRef();

  useEffect(() => {});

  return (
    <>
      <LEFT ref={left} />
      <MID ref={mid} />
      <RIGHT ref={right} />
    </>
  );
};

export default Expander;
