import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./index.css";

const ExpanderItem = React.forwardRef(
  (
    { width = "400px", height = "400px", onItemExpand, onItemShrink, close },
    ref
  ) => {
    const image = useRef();
    const expanderTimeline = gsap.timeline({
      paused: true,
    });
    const shrinkTimeline = gsap.timeline({});

    useEffect(() => {
      if (close) {
        shrinkTimeline.to([ref.current], 0.5, {
          width: 0,
        });
      } else {
        shrinkTimeline.to([ref.current], 0.5, {
          width: 400,
        });
      }
    }, [close]);

    useEffect(() => {
      expanderTimeline.to(
        [ref.current],
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
        className="expander-item expander-item--left"
        style={{
          width,
          height,
        }}
        ref={ref}
        onMouseOver={expand}
        onMouseLeave={shrink}
      >
        <div className="expander-item__image-container" ref={image}></div>
      </div>
    );
  }
);

export default ExpanderItem;
