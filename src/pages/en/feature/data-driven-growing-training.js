import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/FooterEN";
import Nav from "components/shared/NavEN";

export default () => {
  let title = "Data Driven Growing training";
  return (
    <>
      <Nav />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
          LetsGrow has over 20 years of experience with Data Driven Growing.
          Making the team experts on data driven growing and we would like to
          share this knowledge with you. We employ consultants that are able to
          train you and your crop advisor to be able to use the Data Driven
          Growing technique. We will teach you and your growers to combine
          experience with facts and numbers. Enabling repeated use of this
          knowledge over several locations and large distances. You will learn
          that you can make solid decisions without being physically present in
          the greenhouse. Solid decisions based on your data!
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
