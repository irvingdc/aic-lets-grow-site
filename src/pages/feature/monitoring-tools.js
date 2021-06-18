import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";

export default () => {
  let title = "监测工具";
  return (
    <>
      <Nav />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
          数据分析完成后，LetsGrow将为您的作物提供理想的种植策略和目标值。我们的工具可以轻松追踪作物生长。数据增值的一个示例是，我们用最佳的植物平衡或光温比来表明最理想的生长情况，并与您当前的情况进行追踪比较。使您能够确定达到理想状态所需的步骤。我们的工具为您提供了强有力的决策基础，以为您优化作物产量、优化公司业绩助力！
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
