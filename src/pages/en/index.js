import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Timer from "components/shared/Timer";
import Footer from "components/shared/FooterEN";
import Nav from "components/shared/NavEN";
import Meta from "components/shared/Meta";
import { intro } from "../index.module.less";

export default () => {
  return (
    <>
      <Nav />
      <Meta url="/en/" />
      <Header>
        <h1>Stay Tuned for our Event</h1>
        <Timer targetDate="2021-08-18 15:00:00" />
        <p></p>
      </Header>
      <Layout>
        <div className={intro}>
          <h2>Features</h2>
          <p>
          LetsGrow.com allows you to register crop-related data in the MyLetsGrow platform. Among other things, it is possible to centralise data, to make predictions and to use analysis tools. Curious about all the options with MyLetsGrow? Read more about our existing features here. New features are also being developed all the time. 
          </p>
        </div>
      </Layout>
      <Footer/>
    </>
  );
};
