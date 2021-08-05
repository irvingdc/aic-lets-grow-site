import React from "react";
import LargeBoxSide from "components/shared/LargeBoxSide";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";
import Meta from "components/shared/Meta";

export default () => {
  return (
    <>
      <Nav />
      <Meta url="/login/" />
      <LargeBoxSide leftContent={<h1>登陆</h1>}>
        <iframe
          title="Dit is een iframe"
          loading="lazy"
          src="https://login.letsgrow.com.cn/zh/auth"
          width="100%"
          height="720"
        ></iframe>
      </LargeBoxSide>
      <Footer path="Login" />
    </>
  );
};
