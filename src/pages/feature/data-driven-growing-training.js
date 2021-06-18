import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";

export default () => {
  let title = "数据驱动种植培训";
  return (
    <>
      <Nav />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
          LetsGrow拥有超过20年的数据驱动种植的经验。我们愿意与您分享知识，让您的团队成为数据驱动种植方面的专家。我们聘请的顾问将培训您和您的作物顾问践行数据驱动种植的技术。我们将教您和您的种植者将经验与事实和数字结合起来，并能够在多个地点和远距离重复使用这些知识。您将学习到，如何不必亲临温室现场即可做出可靠的决定，基于数据的可靠决策！
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
