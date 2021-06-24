import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Timer from "components/shared/Timer";
import Footer from "components/shared/FooterEN";
import Nav from "components/shared/NavEN";

export default () => {
  return (
    <>
      <Nav />
      <Header>
        <h1>Stay Tuned for our Event</h1>
        <Timer targetDate="2021-08-18 15:00:00" />
        <p></p>
      </Header>
      <Layout>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Layout>
      <Footer/>
    </>
  );
};
