import React from "react";
import {
  container,
  leftBox,
  rightBox,
  content,
  reversedContent,
} from "./index.module.less";

export default ({ reverse, children, leftContent }) => (
  <div className={container}>
    <div className={[content, reverse ? reversedContent : ""].join(" ")}>
      <div className={leftBox}>{leftContent}</div>
      <div className={rightBox}>{children}</div>
    </div>
  </div>
);
