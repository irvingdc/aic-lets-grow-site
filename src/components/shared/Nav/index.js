import React, { useState } from "react";
import classes from "./index.module.less";
import logo from "images/logo-green.svg";
import Hoverable from "../Hoverable";
import LinkWithContent from "../LinkWithContent";
import Layout from "../Layout";
import { Link } from "gatsby";
import menu from "images/svg_icons/menu2.svg";
import close from "images/svg_icons/close.svg";
import loupe from "images/svg_icons/loupe.svg";

export default () => {
  let [display, setDisplay] = useState(false);
  let [selected, setSelected] = useState("services");

  let handleSelection = (val) => {
    setSelected(val);
  };
  return (
    <div
      className={[classes.container, display ? classes.notBlurred : ""].join(
        " "
      )}
    >
      <Layout>
        <span className={classes.menuButton}>
          {!display ? (
            <img src={menu} alt="Menu Icon" onClick={() => setDisplay(true)} />
          ) : null}
          {display ? (
            <img
              src={close}
              alt="Close Icon"
              onClick={() => setDisplay(false)}
            />
          ) : null}
        </span>
        <Link to="/" className={classes.mainIcon}>
          <img src={logo} alt="logo" />
        </Link>
        <div
          className={[classes.content, display ? classes.displayed : ""].join(
            " "
          )}
        >
          <Hoverable
            selected={selected}
            title="Our Services"
            identifier="services"
            onChangeSelect={handleSelection}
          >
            <LinkWithContent to="/services/localization/" title="Localization">
              <p>
                We help you comply with local laws, license and protect your IP,
                and modify your app or game for China.
              </p>
            </LinkWithContent>
            <LinkWithContent to="/services/monetization/" title="Monetization">
              <p>
                AppInChina Pay is the best way to integrate WeChat Pay & AliPay
                in-app payments into your game or app.
              </p>
            </LinkWithContent>
            <LinkWithContent to="/services/distribution/" title="Distribution">
              <p>
                Launch your app or game on China's Apple App Store and the top
                15 Android app stores in China.
              </p>
            </LinkWithContent>
            <LinkWithContent
              to="/services/game-publishing/"
              title="Game Publishing"
            >
              <p>
                Half of China plays mobile games. We will get them playing yours
                by taking care of every step - from distribution to promotion to
                monetization.
              </p>
            </LinkWithContent>
            <LinkWithContent
              to="/services/acquisition/"
              title="User Acquisition"
            >
              <p>
                We provide custom UA services for the Chinese market with
                analytics, ASO and CPD campaigns.
              </p>
            </LinkWithContent>
            <LinkWithContent to="/services/integration/" title="Integration">
              <p>
                We can test your app or game for dependencies and provide SDKs
                and cloud services that work in China.
              </p>
            </LinkWithContent>
            <LinkWithContent to="/services/hosting/" title="Hosting">
              <p>
                With our local hosting service, you can comply with Chinese law
                and provide the best user experience.
              </p>
            </LinkWithContent>
            <LinkWithContent to="/services/compliance/" title="Compliance">
              <p>
                We will bring your company, product, and service into full
                compliance with Chinese law.
              </p>
            </LinkWithContent>
            <LinkWithContent to="/payments/" title="In-App Payments">
              <p>
                Accept WeChat Pay and Alipay and manage them in English on your
                client backend, with API support. We also pay all Chinese taxes
                on your behalf.
              </p>
            </LinkWithContent>
            <LinkWithContent to="/services/other/" title="Other Services">
              <p>
                We offer solutions for eCommerce, Software as a Service (SaaS),
                WeChat Mini Programs, and more.
              </p>
            </LinkWithContent>
          </Hoverable>
          <Hoverable
            selected={selected}
            title="Resources"
            identifier="resources"
            onChangeSelect={handleSelection}
          >
            <LinkWithContent to="/blog/" title="Blog">
              <p>
                Read and subscribe to our blog to catch up on the latest
                industry trends and news from China.
              </p>
            </LinkWithContent>
            <LinkWithContent
              to="/government-policies-china/"
              title="Government Documents"
            >
              <p>
                Research English translations of official government policies
                and communication on the mobile apps and games market.
              </p>
            </LinkWithContent>
            <LinkWithContent to="/infographics/" title="Infographics">
              <p>
                A wealth of data on the China app and games market, in easy to
                digest visual format.
              </p>
            </LinkWithContent>
            <LinkWithContent
              to="/games/game-licenses/"
              title="China Game License Database"
            >
              <p>
                Search all the game license approvals in China in English with
                this handy tool, updated monthly.
              </p>
            </LinkWithContent>
            <LinkWithContent
              to="/test-your-site-in-china/"
              title="Test Your Site In China"
            >
              <p>
                Is your website available to Chinese users? Enter your URL to
                test your site’s availability in Mainland China and find out.
              </p>
            </LinkWithContent>
          </Hoverable>
          <Hoverable
            selected={selected}
            title="The Market"
            identifier="market"
            onChangeSelect={handleSelection}
          >
            <LinkWithContent to="/market/app-stores/" title="App Store Index">
              <p>
                Updated quarterly, the AppInChina App Store Index is the
                market-leading index of China's largest Android app stores.
              </p>
            </LinkWithContent>
            <LinkWithContent to="/market/game-stores/" title="Game Store Index">
              <p>
                Updated quarterly, the AppInChina Game Store Index ranks the
                most popular Android game stores on the Chinese market.
              </p>
            </LinkWithContent>
            <LinkWithContent to="/market/apps/" title="App Index">
              <p>
                The AppInChina App Index ranks the best-performing Android app
                in the Chinese market.
              </p>
            </LinkWithContent>
            <LinkWithContent to="/market/games/" title="Game Index">
              <p>
                The AppInChina Mobile Games Index tracks the top 20 mobile games
                in China across all platforms (iOS and Android).
              </p>
            </LinkWithContent>
            <LinkWithContent
              to="/market/device-brands/"
              title="Device Brand Index"
            >
              <p>
                Updated quarterly, the AppInChina Mobile Device Index ranks the
                top 20 most popular mobile device brands in China today.
              </p>
            </LinkWithContent>
          </Hoverable>
          <Hoverable
            selected={selected}
            title="About Us"
            identifier="about"
            onChangeSelect={handleSelection}
          >
            <LinkWithContent to="/our-company" title="Our Company">
              <p>
                Meet the team and learn why we are the most trusted company for
                foreign app distribution and marketing in Mainland China.
              </p>
            </LinkWithContent>
            <LinkWithContent to="/success" title="Success Stories">
              <p>
                We are proud to count the world's most respected companies and
                brands among our clients. Read some stories of their successful
                launches in China.
              </p>
            </LinkWithContent>
            <LinkWithContent to="/media" title="Media">
              <p>
                Major news outlets regularly cite AppInChina for the most
                current data and insights into trends regarding the Chinese
                mobile app market.
              </p>
            </LinkWithContent>
            <LinkWithContent to="/careers" title="Careers">
              <p>
                Ready to plunge into the rewarding environment of a fast-growing
                company? See what we have to offer here in the heart of China.
              </p>
            </LinkWithContent>
          </Hoverable>
        </div>
        <div onClick={() => setDisplay(false)} className={classes.rightButtons}>
          <a
            href="https://clients.appinchina.co/login"
            className={classes.white}
            target="_blank"
          >
            Sign In
          </a>
          <Link to="/get-started" className={classes.green}>
            Get Started
          </Link>
          <Link to="/search" className={classes.search}>
            <img src={loupe} alt="Search" />
          </Link>
        </div>
      </Layout>
    </div>
  );
};
