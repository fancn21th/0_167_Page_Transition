import React, { useEffect, useState } from "react";
import LEFT from "./components/expander-item-left";
import MID from "./components/expander-item-mid";
import RIGHT from "./components/expander-item-right";

const Expander = () => {
  const [leftClosed, setLeftClosed] = useState(false);
  const [midClosed, setMidClosed] = useState(false);
  const [rightClosed, setRightClosed] = useState(false);

  useEffect(() => {});

  const leftProps = {
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
    onItemExpand: () => {
      setLeftClosed(true);
      setRightClosed(true);
    },
    onItemShrink: () => {
      setLeftClosed(false);
      setRightClosed(false);
    },
    close: midClosed,
  };

  const rightProps = {
    onItemExpand: () => {
      setLeftClosed(true);
      setRightClosed(true);
    },
    onItemShrink: () => {
      setLeftClosed(false);
      setRightClosed(false);
    },
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
