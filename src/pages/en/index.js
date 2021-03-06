import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/FooterEN";
import Nav from "components/shared/NavEN";
import Meta from "components/shared/Meta";
import { intro } from "../index.module.less";
import { Link } from "gatsby";
import video from "images/trailer.mp4"
import poster from "images/poster.jpeg"

export default () => {
  return (
    <>
      <Nav />
      <Meta url="/en/" />
      <Header>
        <h1>Stay tuned for our next event on August 28th</h1><div>
          <video controls autolay style={{ "width": "100%" }} poster={poster}>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <p></p>
      </Header>
      <Layout>
        <div className={intro}>
          <h2>Features</h2>
          <p>
            LetsGrow.com allows you to register crop-related data in the MyLetsGrow platform.
            Among other things, it is possible to centralise data, to make predictions and to use analysis tools.
            Curious about all the options with MyLetsGrow?
            Read more about our existing features <Link to="/en/features/">here</Link>.
            New features are also being developed all the time.
          </p>
        </div>
      </Layout>
      <Footer />
    </>
  );
};
