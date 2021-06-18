import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/FooterEN";
import Nav from "components/shared/NavEN";

export default () => {
  let title = "Plant Empowerment";
  return (
    <>
      <Nav />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
          Plant Empowerment is the roadmap towards Data Driven Growing. Data
          Driven Growing ensures consistency in the production and the optimal
          use of resources. This means it is not only sustainable to grow your
          crop according to Plant Empowerment, it also saves money. This is why
          we published the book and why LetsGrow is the founder of the Plant
          Empowerment Sustainable Growing Foundation. By conducting our data
          analyses and implementing our monitoring tools, it is getting easier
          for companies to implement the principles of Plant Empowerment. We
          even trained consultants for this purpose. Our consultants can teach
          you and your growers how to grow the crop according to the Plant
          Empowerment principles. We do this using your own data. These are
          practical tools enabling you to start right away.
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
