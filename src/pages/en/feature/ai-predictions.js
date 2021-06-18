import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/FooterEN";
import Nav from "components/shared/NavEN";

export default () => {
  const title = "AI predictions";

  return (
    <>
      <Nav />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
          With the arrival of Artificial Intelligence (AI) and its many
          applications, we have entered a new age. LetsGrow.com uses AI to
          predict “What is going to happen?”; “How much energy will need the
          coming days?”; and “What is the prediction of my crop the coming
          weeks?”. With these predictions at your disposal, you have a tool to
          determine if the outcome shows you the desired results or if a change
          in strategy is required. Instead of reacting to daily events, you can
          anticipate based on predictions of what is to come. This enables you
          to make major improvements in your process.
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
