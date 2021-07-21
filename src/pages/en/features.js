import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import FeaturesCards from "components/shared/FeaturesCardsEN";
import Footer from "components/shared/FooterEN";
import Nav from "components/shared/NavEN";
import Meta from "components/shared/Meta";

export default () => {
  return (
    <>
      <Nav />
      <Meta url="/en/features/" />
      <Header>
        <h1>Features</h1>
        <p>Curious about our features read more about them over here.</p>
      </Header>
      <Layout>
        <FeaturesCards />
      </Layout>
      <Footer path="Features" />
    </>
  );
};
