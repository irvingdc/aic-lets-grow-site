import React from "react";
import Header from "components/shared/Header";
import SmallBoxSide from "components/shared/SmallBoxSide";
import Footer from "components/shared/FooterEN";
import Nav from "components/shared/NavEN";
import bat from "images/photos/Batenburg.jpeg";

export default () => {
  return (
    <>
      <Nav />
      <Header>
        <h1>About LetsGrow.com.cn</h1>
        <p></p>
      </Header>
      <SmallBoxSide img={bat}>
        <h2>Organization</h2>
        <p>
          LetsGrow is part of Batenburg Techniek. Batenburg Techniek operates in
          the center of smart industry as a provider of technical services. With
          over 1.000 specialists Batenburg aims to make production, growing and
          real estate of customers in the areas of industry, infrastructure and
          horticulture smarter, safer and more sustainable. Starting from long
          lasting customer relations they work on successful projects with an
          energetic attitude and creativity. Read more about Batenburg and our
          specialists at{" "}
          <a
            href="https://www.batenburg.nl"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.batenburg.nl
          </a>
          .
        </p>
      </SmallBoxSide>
      <Footer path="About" />
    </>
  );
};
