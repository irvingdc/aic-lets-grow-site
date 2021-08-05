import React from "react";
import LargeBoxSide from "components/shared/LargeBoxSide";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";
import ContactForm from "components/shared/ContactForm";
import Meta from "components/shared/Meta";

export default () => {
  return (
    <>
      <Nav />
      <Meta url="/contact/" />
      <LargeBoxSide
        reverse
        leftContent={
          <>
            <h1>
              <b>客户服务</b>
            </h1>
            <p>
              对于MyLetsGrow或者我们的服务有任何问题？
              请通过填写表格或者电话（+86（0）10 6501 6548）联系我们。
            </p>
          </>
        }
      >
        <ContactForm />
      </LargeBoxSide>
      <Footer path="联系我们" />
    </>
  );
};
