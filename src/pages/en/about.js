import React from "react";
import Header from "components/shared/Header";
import SmallBoxSide from "components/shared/SmallBoxSide";
import Footer from "components/shared/FooterEN";
import Nav from "components/shared/NavEN";
import bat from "images/photos/Batenburg.jpeg";
import Meta from "components/shared/Meta";

export default () => {
  return (
    <>
      <Nav />
      <Meta url="/en/about/" />
      <Header>
        <h1>About LetsGrow.com.cn</h1>
        <p></p>
      </Header>
      <SmallBoxSide img={bat}>
        <h2>Organization</h2>
        <p>
          LetsGrow.com.cn is part of Hoogendoorn Company.
          <br />
          Hoogendoorn Company is an expert in smart horticulture industry. With
          the most advanced climate computer IIVO and a dedicated team of
          expert, Hoogendoorn made the horticulture smarter, safer and more
          sustainable. <br />
          With More than 8 years development in China, our team build a strong
          network of customer and partner who believe that smart horticulture is
          a state of mind to make the world better.
          <br />
          Read more about Hoogendoorn and our specialists at{" "}
          <a
            href="https://www.hoogendoorn.asia"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.hoogendoorn.asia
          </a>
        </p>
      </SmallBoxSide>
      <Footer path="About" />
    </>
  );
};
