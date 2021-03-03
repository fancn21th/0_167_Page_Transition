import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import LEFT from "./components/expander-item-left";
import MID from "./components/expander-item-mid";
import RIGHT from "./components/expander-item-right";

const Expander = () => {
  const left = React.createRef();
  const mid = React.createRef();
  const right = React.createRef();

  const [leftClosed, setLeftClosed] = useState(false);
  const [midClosed, setMidClosed] = useState(false);
  const [rightClosed, setRightClosed] = useState(false);

  useEffect(() => {});

  const leftProps = {
    ref: left,
    onItemExpand: () => {
      setMidClosed(true);
      setRightClosed(true);
    },
    onItemShrink: () => {
      setMidClosed(false);
      setRightClosed(false);
    },
    close: leftClosed,
  };

  const midProps = {
    ref: mid,
    onItemExpand: () => {},
    onItemShrink: () => {},
    close: midClosed,
  };

  const rightProps = {
    ref: right,
    onItemExpand: () => {},
    onItemShrink: () => {},
    close: rightClosed,
  };

  return (
    <>
      <LEFT {...leftProps} />
      <MID {...midProps} />
      <RIGHT {...rightProps} />
    </>
  );
};

export default Expander;
