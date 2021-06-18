import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";

export default () => {
  let title = "数据中心化";
  return (
    <>
      <Nav />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
        LetsGrow可以集中收集和存储来自不同生产地点的数据，并允许您分析这些数据。数据可以来自所有品牌的气候计算机、传感器、销售系统、分拣设备、机器人和任何其他数据源。为您、您的种植者和生产管理者提供所需的信息，为他们每天做出正确的运营和战略决策提供支持。
        </p>
      </Layout>
      <Footer
        path={
          <>
            特点<i>/</i>
            {title}
          </>
        }
      />
    </>
  );
};
