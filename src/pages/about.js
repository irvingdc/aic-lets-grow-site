import React from "react";
import Header from "components/shared/Header";
import SmallBoxSide from "components/shared/SmallBoxSide";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";
import bat from "images/photos/Batenburg.jpeg";
import Meta from "components/shared/Meta";

export default () => {
  return (
    <>
      <Nav />
      <Meta url="/about/" />
      <Header>
        <h1>关于我们</h1>
        <p></p>
      </Header>
      <SmallBoxSide img={bat}>
        <h2>组织架构</h2>
        <p>
          LetsGrow.com是豪根道集团的一部分。
          <br />
          豪根道公司是智慧园艺产业中的专家。基于最先进的环控计算机IIVO和尽职专业的专家，豪根道使园艺产业更加智慧、更加安全且更加可持续。
          <br />
          经过超过8年在中国的发展，我们的团队与相信智慧园艺使世界变得更美好的客户与合作伙伴建立了稳固的网络。
          <br />
          阅读更多关于豪根道与我们的专家，请访问{" "}
          <a
            href="https://www.hoogendoorn.asia"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.hoogendoorn.asia
          </a>
        </p>
      </SmallBoxSide>
      <Footer path="关于我们" />
    </>
  );
};
