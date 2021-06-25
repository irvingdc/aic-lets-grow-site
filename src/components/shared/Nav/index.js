import React, { useEffect, useState } from "react";
import {
  container,
  notBlurred,
  menuButton,
  content,
  displayed,
  rightButtons,
  login,
  search,
  mainIcon,
  leftHidden,
  rightHidden,
  scrolledClass,
  languageSwitch,
} from "./index.module.less";
import logo from "images/logo.png";
import logoalt from "images/logoalt.png";
import Layout from "../Layout";
import { Link } from "gatsby";
import menu from "images/icons/menu2.svg";
import close from "images/icons/close.svg";
import loupe from "images/icons/loupe.svg";
import loupeBlack from "images/icons/loupe-black.svg";
import world from "images/icons/world.svg";
import worldBlack from "images/icons/world-black.svg";
import SearchBar from "components/shared/SearchBar";

const LanguageSwitcher = ({ scrolled }) => {
  if (typeof window === "undefined") {
    return null;
  }
  let pathname = `${window?.location?.pathname?.replace("/en", "")}${
    window?.location?.search
  }`;
  console.log("pathname - ", pathname);
  let enLink = `/en/${pathname}`.replace(/\/\//g, "/");
  let zhLink = pathname;
  return (
    <div className={languageSwitch}>
      <span>
        <img src={scrolled ? worldBlack : world} alt="Language" />
        {scrolled ? <b></b> : <i></i>}
      </span>
      <div>
        <Link to={zhLink}>ZH</Link>
        <Link to={enLink}>EN</Link>
      </div>
    </div>
  );
};

export default () => {
  let [display, setDisplay] = useState(false);
  let [scrolled, setScrolled] = useState(false);
  let [displaySearch, setDisplaySearch] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      let activateScroll = () => {
        let scroll = window.scrollY;
        if (scroll > 10) {
          setScrolled(true);
        } else if (scroll < 10) {
          setScrolled(false);
        }
      };
      activateScroll();
      window.addEventListener("scroll", (e) => {
        activateScroll();
      });
    }
  }, []);
  return (
    <nav
      className={[
        container,
        display ? notBlurred : "",
        scrolled ? scrolledClass : "",
      ].join(" ")}
    >
      <Layout>
        <span className={menuButton}>
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
        <Link to="/" className={mainIcon}>
          <img src={scrolled ? logoalt : logo} alt="logo" />
        </Link>
        <div className={[content, display ? displayed : ""].join(" ")}>
          <Link to="/">发布会</Link>
          <Link to="/features/">特点</Link>
          <Link to="/about/">关于我们</Link>
          <Link to="/contact/">联系我们</Link>
          <Link to="/login/" className={leftHidden}>
            Login
          </Link>
        </div>
        <div onClick={() => setDisplay(false)} className={rightButtons}>
          <Link to="/login/" className={[login, rightHidden].join(" ")}>
            Login
          </Link>
          <button
            className={search}
            onClick={() => setDisplaySearch(!displaySearch)}
          >
            <img src={scrolled ? loupeBlack : loupe} alt="Search" />
          </button>
          <LanguageSwitcher scrolled={scrolled} />
          <SearchBar display={displaySearch} lang="zh" label="Type here..." />
        </div>
      </Layout>
    </nav>
  );
};
