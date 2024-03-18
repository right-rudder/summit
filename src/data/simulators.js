import FMXImage from "../../public/img/our-fleet/FMX-sim.jpg";
import FTSImage from "../../public/img/our-fleet/FTS-sim.jpg";

export const simulators = [
  {
    name: "FMX Full Motion Simulator",
    image: FMXImage,
    panels: ["Cessna 172 With Garmin 530/430"],
    hoursInSimulatorCanBeUsedAs: [
      "2.5 hours for Private Pilot",
      "20 hours for Instrument",
      "Instrument currency",
      "50 hours Commercial",
    ],
    rentalPrice: "$77 / hour",
  },
  {
    name: "FTS Simulator",
    image: FTSImage,
    panels: [
      "Cessna 172 & 182 (20 different panel configurations)",
      "Columbia 350 (Avydine, G1000) Cirrus SR 20 & SR 22 (19 different panel configurations)",
    ],
    hoursInSimulatorCanBeUsedAs: [
      "2.5 hours for Private Pilot",
      "10 hours for Instrument",
      "Instrument currency",
    ],
    rentalPrice: "$44 / hour",
  },
];
