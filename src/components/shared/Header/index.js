import React from "react";
import { container } from "./index.module.less";

export default ({ children }) => (
  <header className={container}>{children}</header>
);
