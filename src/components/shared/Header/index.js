import React from "react";
import { container } from "./index.module.less";
import Layout from "components/shared/Layout";

export default ({ children }) => (
  <header className={container}>
    <Layout>{children}</Layout>
  </header>
);
