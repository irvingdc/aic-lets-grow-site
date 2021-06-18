import React from "react";
import { container, textBox, imgBox } from "./index.module.less";

export default ({ children, img }) => (
  <div className={container}>
    <div className={textBox}>{children}</div>
    <div className={imgBox}>
      <img src={img} alt="image" />
    </div>
  </div>
);
