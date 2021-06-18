import React from "react";
import LargeBoxSide from "components/shared/LargeBoxSide";
import Footer from "components/shared/FooterEN";
import Nav from "components/shared/NavEN";

export default () => {
  return (
    <>
      <Nav />
      <LargeBoxSide leftContent={<h1>Login</h1>}>
        <iframe
          title="Dit is een iframe"
          loading="lazy"
          src="https://login.letsgrow.com/en/auth"
          width="100%"
          height="720"
        ></iframe>
      </LargeBoxSide>
      <Footer path="Login" />
    </>
  );
};
