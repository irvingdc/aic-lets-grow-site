import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";
import Meta from "components/shared/Meta";

export default () => {
  let title = "数据分析";
  return (
    <>
      <Nav />
      <Meta url="/feature/data-analysis/" />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
          每个温室和作物的反应均会因环境而异，所以根据计划分析进展以及提升改进是非常重要的。LetsGrow研发了一系列分析工具，用以推荐最适合您作物的策略。通过将不同的（已经过验证的）栽培模式与您的数据相结合，我们可以准确地向您展示当前温室中正确的操作，并且提示您温室中有哪些潜在的可以改进的方面。
          <br />
          <br />
          基于数据的决策使您能够：
          <br />
          <ul>
            <li> 反思您在做什么，以及您的假设是否正确。</li>
            <li> 深入了解有改进空间的领域。</li>
            <li> 优化生产和质量。</li>
          </ul>
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
