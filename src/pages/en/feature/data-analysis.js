import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/FooterEN";
import Nav from "components/shared/NavEN";

export default () => {
  let title = "Data Analysis";
  return (
    <>
      <Nav />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
          Every greenhouse and crop reacts differently depending on the
          circumstances. That is why it is very important to analyse what is
          going according to plan and where improvements are required. LetsGrow
          has developed several analyses which can be used to discover what
          strategy is best for your crop. By combining different (proven)
          cultivation models with your data, we can show you exactly what is
          going right and what potential areas of improvement have been detected
          in your greenhouse.
          <br />
          <br />
          Basing your decisions on data enables you to:
          <br />
          <ul>
            <li>
              Reflect on what you are doing and if your assumptions are correct.
            </li>
            <li>
              Gain insight into areas where there is room for improvement.
            </li>
            <li>Optimise both production and quality.</li>
          </ul>{" "}
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
