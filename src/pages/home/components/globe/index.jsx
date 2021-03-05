import React from "react";

import { EncomGlobe } from "encom-globe-react";
import "encom-globe-react/dist/index.css";
import "./index.css";

import pinLocations from "./config/pin-locations";
import grid from "./config/grid";

const marker1 = { lat: 30.52, lon: 114.31, label: "湖北" };
const marker2 = {
  lat: 51.165691,
  lon: 10.451526,
  label: "德国",
  connected: true,
};
const demoMarkers = [marker1, marker2];

const globeConfig = {
  // NOTE: For an example of loading this font check the example/src/index.css  @font-face
  font: "Inconsolata",
  pinsData: pinLocations,
  tiles: grid.tiles,
  baseColor: "green",
  markerColor: "red",
  pinColor: "green",
  satelliteColor: "yellow",
  scale: 1.0,
  dayLength: 1000 * 28,
  introLinesDuration: 2000,
  maxPins: 500,
  maxMarkers: 4,
  viewAngle: 0.1,
};

const Globe = () => {
  const initialSize = Math.min(window.innerWidth, window.innerHeight);
  const [state, setState] = React.useState({
    width: initialSize,
    height: initialSize,
  });
  React.useEffect(() => {
    const cb = () => {
      const newSize = Math.min(window.innerWidth, window.innerHeight);
      setState({ width: newSize, height: newSize });
    };
    window.addEventListener("resize", cb, false);

    return () => window.removeEventListener("resize", cb);
  }, []);

  const [markers, setMarkers] = React.useState([]);
  const [constellations, setConstellations] = React.useState([]);

  const demo = () => {
    console.log("Run demo");
    // ADD MARKERS
    setTimeout(() => setMarkers(demoMarkers), 4000);

    //ADD SATELLITES
    setTimeout(() => {
      const constellation = [];
      const opts = {
        waveColor: "#FFF",
        coreColor: "#FF0000",
        shieldColor: "#fff",
        numWaves: 8,
      };
      const alt = 1.3;

      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
          constellation.push({
            lat: 50 * i - 30 + 15 * Math.random(),
            lon: 120 * j - 120 + 30 * i,
            altitude: alt,
          });
        }
      }

      setConstellations([
        {
          opts,
          sats: constellation,
        },
      ]);
    }, 6000);
  };

  return (
    <div className="globe-container">
      <EncomGlobe
        width={state.width}
        height={state.height}
        markers={markers}
        // satellites={satellites}
        globeConfig={globeConfig}
        constellations={constellations}
        globeReadyCb={demo}
      />
    </div>
  );
};

export default Globe;
