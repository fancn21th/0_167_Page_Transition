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
      1.5,
      {
        width: 1200,
      },
      "first"
    );
    tl.to(
      [image.current],
      1.5,
      {
        x: 0,
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
      className="expander-item"
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
