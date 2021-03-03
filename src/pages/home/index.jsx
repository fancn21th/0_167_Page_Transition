import React from "react";
import Grid from "./layout";
import Ticket from "./components/ticket";
import Map from "./components/map";
import "./index.css";

const Page = () => {
  return (
    <>
      <Grid />
      <Map />
      {/* <Ticket /> */}
    </>
  );
};

export default Page;
