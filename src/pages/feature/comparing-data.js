import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";
import Meta from "components/shared/Meta";

export default () => {
  let title = "对比数据";
  return (
    <>
      <Nav />
      <Meta url="/feature/comparing-data/" />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
        因为您可以与不同地点、种植者和其他公司之间共享和比较您的数据，所以您可以基于您正在采取的策略与其他公司进行对比。使您能够从彼此的战略中学习并实施改进。您可以决定哪些数据与别人进行共享。
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
