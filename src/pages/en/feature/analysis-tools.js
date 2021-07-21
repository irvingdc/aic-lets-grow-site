import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/FooterEN";
import Nav from "components/shared/NavEN";
import Meta from "components/shared/Meta";

export default () => {
  const title = "Analysis tools";

  return (
    <>
      <Nav />
      <Meta url="/en/feature/analysis-tools/" />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
          MyLetsGrow has a wide range of tools to visualize your data. These
          enable you to spot anomalies; to analyze graphs across several days or
          to compress your data to an average per day or hour; to compare two
          crop cycles or different time spans; and many other options. Above
          all, you can set up notifications per text or email based on time or
          anomalies. Allowing you to stay informed and in control.
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
