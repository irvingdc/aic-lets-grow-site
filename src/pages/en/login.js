import React from "react";
import LargeBoxSide from "components/shared/LargeBoxSide";
import Footer from "components/shared/FooterEN";
import Nav from "components/shared/NavEN";
import Meta from "components/shared/Meta";

export default () => {
  return (
    <>
      <Nav />
      <Meta url="/en/login/" />
      <LargeBoxSide leftContent={<h1>Login</h1>}>
        <iframe
          title="This is an iframe"
          loading="lazy"
          src="https://login.letsgrow.com.cn/en/auth"
          width="100%"
          height="720"
        ></iframe>
      </LargeBoxSide>
      <Footer path="Login" />
    </>
  );
};
