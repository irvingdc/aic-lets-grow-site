import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/FooterEN";
import Nav from "components/shared/NavEN";

export default () => {
  let title = "Monitoring tools";
  return (
    <>
      <Nav />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
          When the data analysis is finished, LetsGrow will have mapped the
          ideal cultivation strategy and target values for your crop. Our tools
          make it easy to follow the growth of the crop. One example of value
          being added is when you have insight in your optimal plant balance, or
          light and temperature ratio, which indicates what the ideal
          circumstances are and how these relate to your current situation.
          Enabling you to identify the required steps to get to the ideal
          situation. Our tools provide you with a strong decision-making
          foundation to optimise your crop production and therefore optimising
          your company’s overall results.
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
