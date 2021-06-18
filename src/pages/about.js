import React from "react";
import Header from "components/shared/Header";
import SmallBoxSide from "components/shared/SmallBoxSide";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";
import bat from "images/photos/Batenburg.jpeg";

export default () => {
  return (
    <>
      <Nav />
      <Header>
        <h1>关于我们</h1>
        <p></p>
      </Header>
      <SmallBoxSide img={bat}>
        <h2>组织架构</h2>
        <p>
          LetsGrow是Batenburg Techniek集团的子公司。Batenburg
          Techniek集团是位于智能产业中心的技术服务提供商。Batenburg拥有超过1000名专家，致力于使工业、基础设施和园艺领域的生产、种植和房地产客户变得更智能、更安全和更可持续。从持久的客户关系开始，我们以充满活力的态度和创造力助力项目的成功。了解更多关于Batenburg和我们的专家，请访问
          <a
            href="https://www.batenburg.nl"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.batenburg.nl
          </a>
          .
        </p>
      </SmallBoxSide>
      <Footer path="关于我们" />
    </>
  );
};
