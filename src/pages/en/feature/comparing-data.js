import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/FooterEN";
import Nav from "components/shared/NavEN";
import Meta from "components/shared/Meta";

export default () => {
  let title = "Comparing data";
  return (
    <>
      <Nav />
      <Meta url="/en/feature/comparing-data/" />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
          Because you can share and compare your data between locations, growers
          and other companies, you are able to benchmark based on both the
          actions you are taking and those of others. Enabling you to learn from
          each other’s strategies and implement improvements. You decide which
          data you want to share with others.
        </p>
      </Layout>
      <Footer
        path={
          <>
            Features<i>/</i>
            {title}
          </>
        }
      />
    </>
  );
};
