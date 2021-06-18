import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/FooterEN";
import Nav from "components/shared/NavEN";

export default () => {
  let title = "DataHub";
  return (
    <>
      <Nav />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
          In recent years, the demand for data has grown exponentially, however,
          this demand has existed for far longer than that. LetsGrow has been
          active with data analysis for over 20 years. The first automated
          connections with climate computers were developed in 2003. In 2010,
          with explicit permission from the customer, external companies started
          using the LetsGrow platform as an independent DataHub. Currently, over
          50 organizations in the horticultural sector are using LetsGrow as a
          DataHub at more than 1500 greenhouse nurseries. Greenhouse owners are
          in full control of their data at all times and they choose what
          information they want to share. Part of LetsGrow’s core strengths is
          that the services offered reach further than supplying the customer
          with data. There are numerous examples of collaborations where
          LetsGrow provided added value to the partner, therefore strengthening
          the existing partnership. Together, this allows us to further improve
          our mutual customer services. Data is not simply data. Data tells a
          story, and understanding the essence of that story, capturing the core
          principles and sharing these with companies as guidelines for their
          day-to-day business activities, therefore supporting their targets…
          that is what we bring to the table. That is our strength.
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
