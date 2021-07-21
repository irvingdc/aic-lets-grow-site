import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/FooterEN";
import Nav from "components/shared/NavEN";
import Meta from "components/shared/Meta";

export default () => {
  let title = "Centralising your data";
  return (
    <>
      <Nav />
      <Meta url="/en/feature/centralizing-your-data/" />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
          LetsGrow enables the central collection and storing of data of
          different production locations and allows you to analyse this data.
          Data from all brands of climate computers, sensors, sales systems,
          sorting machines, robots, and any other data sources. Providing you,
          your growers, and your managers, with the information they need to
          make the right operational and strategic decisions on a daily basis.
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
