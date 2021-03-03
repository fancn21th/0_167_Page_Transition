import { Component } from "react";
import GridLayout from "react-grid-layout";
import "./index.css";

class Grid extends Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "left1", x: 0, y: 0, w: 8, h: 4 },
      { i: "left2", x: 0, y: 4, w: 8, h: 4 },
      { i: "left3", x: 0, y: 8, w: 8, h: 4 },
      //
      { i: "right1", x: 16, y: 0, w: 8, h: 4 },
      { i: "right2", x: 16, y: 4, w: 8, h: 4 },
      { i: "right3", x: 16, y: 8, w: 8, h: 4 },
    ];
    return (
      <GridLayout
        className="layout grid-layout"
        layout={layout}
        cols={24}
        rowHeight={66}
        width={1920}
      >
        <div key="left1">LEFT1</div>
        <div key="left2">LEFT2</div>
        <div key="left3">LEFT3</div>
        <div key="right1">RIGHT1</div>
        <div key="right2">RIGHT2</div>
        <div key="right3">RIGHT3</div>
      </GridLayout>
    );
  }
}

export default Grid;
