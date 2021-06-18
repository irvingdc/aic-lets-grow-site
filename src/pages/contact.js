import React from "react";
import LargeBoxSide from "components/shared/LargeBoxSide";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";
import ContactForm from "components/shared/ContactForm";

export default () => {
  return (
    <>
      <Nav />
      <LargeBoxSide
        reverse
        leftContent={
          <>
            <h1>
              <b>Customer Service</b>
            </h1>
            <p>
              Any questions about MyLetsGrow or our services? Please contact us
              by filling in the form or call us (+31 (0)10 460 81 08).
            </p>
          </>
        }
      >
        <ContactForm />
      </LargeBoxSide>
      <Footer path="Contact" />
    </>
  );
};
