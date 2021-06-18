import React from "react";
import { container, grid, card, intro } from "./index.module.less";
import iot from "images/photos/IOT.jpeg";
import datadriven from "images/photos/Data-Driven.png";
import plantempower from "images/photos/PlantEmpower-Features.jpeg";
import centralisedata from "images/photos/Centralize-data.png";
import analysetools from "images/photos/Analyse-tools.png";
import ai from "images/photos/AI.png";
import datacomparing from "images/photos/Data-comparing.png";
import datanalysis from "images/photos/Data-Analysis.png";
import monitoring from "images/photos/Monitoring.png";
import datahub from "images/photos/datahub.png";
import { Link } from "gatsby";

let items = [
  {
    title: "IoT Sensors",
    img: iot,
    url: "/en/feature/iot-sensors/",
  },
  {
    title: "Data Driven Growing training",
    img: datadriven,
    url: "/en/feature/data-driven-growing-training/",
  },
  {
    title: "Plant Empowerment",
    img: plantempower,
    url: "/en/feature/plant-empowerment/",
  },
  {
    title: "Centralising Your Data",
    img: centralisedata,
    url: "/en/feature/centralizing-your-data/",
  },
  {
    title: "Analysis Tools",
    img: analysetools,
    url: "/en/feature/analysis-tools/",
  },
  {
    title: "AI Predictions",
    img: ai,
    url: "/en/feature/ai-predictions/",
  },
  {
    title: "Comparing Data",
    img: datacomparing,
    url: "/en/feature/comparing-data/",
  },
  {
    title: "Data Analysis",
    img: datanalysis,
    url: "/en/feature/data-analysis/",
  },
  {
    title: "Monitoring Tools",
    img: monitoring,
    url: "/en/feature/monitoring-tools/",
  },
  {
    title: "Datahub",
    img: datahub,
    url: "/en/feature/datahub/",
  },
];

export default () => (
  <div className={container}>
    <div className={intro}>
      <h2>Features</h2>
      <p>
        LetsGrow.com enables registration of crop data through MyLetsGrow.
        Allowing you to centralize the data and make predictions as well as
        process it in analytical tools. Curious about all the possibilities of
        MyLetsGrow? You will find more information on this page.
      </p>
    </div>
    <div className={grid}>
      {items.map((it) => (
        <Link className={card} to={it.url}>
          <img src={it.img} alt={it.title} />
          <h3>{it.title}</h3>
        </Link>
      ))}
    </div>
  </div>
);
