import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Timer from "components/shared/Timer";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";
import Meta from "components/shared/Meta";
import { intro } from "./index.module.less";
import { Link } from "gatsby";

export default () => {
  return (
    <>
      <Nav />
      <Meta url="/" />
      <Header>
        <h1>敬请关注我们的发布会</h1>
          <Timer targetDate="2021-08-23 15:00:00" lang="ZH"/>
        <p></p>
      </Header>
      <Layout>
        <div className={intro}>
          <h2>特点</h2>
          <p>
            LetsGrow.com.cn将作物相关的数据登记到MyLetsGrow平台。
            多种数据的汇集，使基于数据集中的预测与分析成为可能。
            对MyLetsGrow的所有选项感到好奇？阅读<Link to="/features/">这里</Link>了解更多现有特点。
            新的特点也在不断地更新和开发。
          </p>
        </div>
      </Layout>
      <Footer />
    </>
  );
};
