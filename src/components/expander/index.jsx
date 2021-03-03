import React, { useState } from "react";
import LEFT from "./components/expander-item-left";
import MID from "./components/expander-item-mid";
import RIGHT from "./components/expander-item-right";

const Expander = () => {
  const [close, setClose] = useState({
    left: false,
    mid: false,
    right: false,
  });

  const leftProps = {
    onItemExpand: () => {
      setClose({
        left: false,
        mid: true,
        right: true,
      });
    },
    onItemShrink: () => {
      setClose({
        left: false,
        mid: false,
        right: false,
      });
    },
    close,
  };

  const midProps = {
    onItemExpand: () => {
      setClose({
        left: true,
        mid: false,
        right: true,
      });
    },
    onItemShrink: () => {
      setClose({
        left: false,
        mid: false,
        right: false,
      });
    },
    close,
  };

  const rightProps = {
    onItemExpand: () => {
      setClose({
        left: true,
        mid: true,
        right: false,
      });
    },
    onItemShrink: () => {
      setClose({
        left: false,
        mid: false,
        right: false,
      });
    },
    close,
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
