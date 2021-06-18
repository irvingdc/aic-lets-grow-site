import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";

export default () => {
  let title = "植物赋能";
  return (
    <>
      <Nav />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
        植物赋能是数据驱动种植的路线图。数据驱动种植确保了生产的可持续性和资源的最佳利用。这意味着践行植物赋能原则，不仅可以实现可持续的种植作物，也节省了经济成本。这就是LetsGrow出版这本书，并成为植物赋能可持续增长基金会的创始人的原因。
通过执行数据分析和应用我们的监控工具，应用植物赋能原则变得愈加容易。我们专门培训了植物赋能顾问。顾问可以指导您和您的种植者如何根据植物赋能原则种植作物。我们使用您的数据来指导您的业务。这些实用的工具，使您能够立即开始数据驱动种植。
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
