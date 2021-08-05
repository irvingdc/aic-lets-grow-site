import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/Footer";
import Nav from "components/shared/NavEN";
import Meta from "components/shared/Meta";

export default () => {
  let title = "IoT Sensors";
  return (
    <>
      <Nav />
      <Meta url="/en/feature/iot-sensors/" />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
          LetsGrow.com.cn is an open and flexible platform which make possible
          any IOT device to connect on it. IOT device in China have to follow
          related Communication protocols rules and regulations. In
          letgrow.com.cn , we believe quality and reliability is the most
          important for IOT product. LEtsgrow.com.cn can already connect to
        </p>
        <ul>
          <li>Thermal camera (Thermoview provide by Hoogendoorn Asia)</li>
          <li>
            Camera with picture analysis algorithm (Gear box  provided by
            Hoogendoorn Asia)
          </li>
          <li>Scaling protocol (Trutina provided by Hoogendoorn Asia). </li>
        </ul>
        <p>
          Letsgrow.com.cn can also connect on any kind of IOT device in China
          however as we believe in quality before any connection our company
          will proceed to an quality audit of the product.
        </p>
        <p>
          Because we believe that quality and sustainability is the most
          important.
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
