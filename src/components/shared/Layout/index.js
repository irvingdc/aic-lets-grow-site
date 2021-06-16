import React from "react";
import classes from "./index.module.less";

export default ({ children }) => (
  <div className={classes.container}>{children}</div>
);
