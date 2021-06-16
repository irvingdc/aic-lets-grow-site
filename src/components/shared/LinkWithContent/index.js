import React from "react";
import classes from "./index.module.less";
import { Link } from "gatsby";

export default ({ children, title, to }) => (
  <div className={classes.linkContainer}>
    <Link to={to}>{title}</Link>
    <div>{children}</div>
  </div>
);
