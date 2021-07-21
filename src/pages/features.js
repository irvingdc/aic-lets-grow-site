import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import FeaturesCards from "components/shared/FeaturesCards";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";
import Meta from "components/shared/Meta";

export default () => {
  return (
    <>
      <Nav />
      <Meta url="/features/" />
      <Header>
        <h1>特点</h1>
        <p>欲知更多特点，请阅读此处详情。</p>
      </Header>
      <Layout>
        <FeaturesCards />
      </Layout>
      <Footer path="特点" />
    </>
  );
};
