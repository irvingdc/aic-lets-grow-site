import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";
import Meta from "components/shared/Meta";
import { intro } from "./index.module.less";
import { Link } from "gatsby";
import video from "images/trailer.mp4"
import poster from "images/poster.jpeg"

export default () => {
  return (
    <>
      <Nav />
      <Meta url="/" />
      <Header>
        <h1>敬请持续关注我们8月28日的更新发布</h1>
        <div>
          <video controls autolay style={{ "width": "100%" }} poster={poster}>
            <source src={video} type="video/mp4" />
          </video>
        </div>
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