import React from "react";
import LargeBoxSide from "components/shared/LargeBoxSide";
import Footer from "components/shared/FooterEN";
import Nav from "components/shared/NavEN";
import ContactFormEN from "components/shared/ContactFormEN";
import Meta from "components/shared/Meta";

export default () => {
  return (
    <>
      <Nav />
      <Meta url="/en/contact/" />
      <LargeBoxSide
        reverse
        leftContent={
          <>
            <h1>
              <b>Customer Service</b>
            </h1>
            <p>
              Any questions about MyLetsGrow or our services? Please contact us
              by filling in the form or call us（+86（0）10 6501 6548).
            </p>
          </>
        }
      >
        <ContactFormEN />
      </LargeBoxSide>
      <Footer path="Contact" />
    </>
  );
};
