import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./index.css";

const ExpanderItem = ({ width = "400px", height = "400px" }) => {
  const item = useRef();
  const image = useRef();
  const tl = gsap.timeline({
    paused: true,
  });

  useEffect(() => {
    tl.to(
      [item.current],
      0.5,
      {
        width: 1200,
        ease: "Power1.out",
      },
      "first"
    );
    tl.to(
      [image.current],
      0.5,
      {
        x: 0,
        ease: "Power1.in",
      },
      "first"
    );
  }, []);

  const expand = () => {
    tl.play();
  };

  const shrink = () => {
    tl.reverse();
  };

  return (
    <div
      className="expander-item expander-item--right"
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
