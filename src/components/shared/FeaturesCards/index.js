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
    title: "物联网传感器",
    img: iot,
    url: "/feature/iot-sensors/",
  },
  {
    title: "数据驱动种植培训",
    img: datadriven,
    url: "/feature/data-driven-growing-training/",
  },
  {
    title: "植物赋能",
    img: plantempower,
    url: "/feature/plant-empowerment/",
  },
  {
    title: "数据中心化",
    img: centralisedata,
    url: "/feature/centralizing-your-data/",
  },
  {
    title: "分析工具",
    img: analysetools,
    url: "/feature/analysis-tools/",
  },
  {
    title: "AI预测",
    img: ai,
    url: "/feature/ai-predictions/",
  },
  {
    title: "对比数据",
    img: datacomparing,
    url: "/feature/comparing-data/",
  },
  {
    title: "数据分析",
    img: datanalysis,
    url: "/feature/data-analysis/",
  },
  {
    title: "监测工具",
    img: monitoring,
    url: "/feature/monitoring-tools/",
  },
  {
    title: "数据枢纽",
    img: datahub,
    url: "/feature/datahub/",
  },
];

export default () => (
  <div className={container}>
    <div className={intro}>
      <h2>特点</h2>
      <p>
        LetsGrow允许通过MyLetsGrow登记管理作物数据。允许您集中数据、进行预测以及在分析工具中处理数据。想了解MyLetsGrow的所有可能性吗？您将在本页找到更多信息。
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
