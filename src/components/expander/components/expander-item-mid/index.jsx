import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./index.css";

const ExpanderItem = ({
  width = "400px",
  height = "400px",
  onItemExpand,
  onItemShrink,
  close,
}) => {
  const item = useRef();
  const image = useRef();
  const expanderTimeline = gsap.timeline({
    paused: true,
  });
  const shrinkTimeline = gsap.timeline({
    paused: true,
  });

  useEffect(() => {
    if (close) {
      shrinkTimeline.play();
    } else {
      shrinkTimeline.reverse();
    }
  }, [close]);

  useEffect(() => {
    expanderTimeline.to(
      [item.current],
      0.5,
      {
        width: 1200,
        ease: "Power1.out",
      },
      "first"
    );
    expanderTimeline.to(
      [image.current],
      0.5,
      {
        x: 0,
        ease: "Power1.in",
      },
      "first"
    );
    shrinkTimeline.to([item.current], 0.5, {
      width: 0,
      ease: "Power1.out",
    });
  }, []);

  const expand = () => {
    onItemExpand();
    expanderTimeline.play();
  };

  const shrink = () => {
    onItemShrink();
    expanderTimeline.reverse();
  };

  return (
    <div
      className="expander-item expander-item--mid"
      style={{
        width,
        height,
      }}
      ref={item}
      onMouseOver={expand}
      onMouseLeave={shrink}
    >
      <div className="expander-item__image-container" ref={image}></div>
    </div>
  );
};
export default ExpanderItem;
