import React from "react";
import { container, ghostClass } from "./index.module.less";

export default ({ children, icon, onClick, ghost }) => (
  <button
    className={[container, ghost ? ghostClass : ""].join(" ")}
    onClick={onClick}
  >
    <span>{children}</span>
    {icon ? <img alt="icon" src={icon} /> : null}
  </button>
);
