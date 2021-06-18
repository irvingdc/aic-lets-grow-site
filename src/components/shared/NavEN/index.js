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

const LanguageSwitcher = ({ scrolled }) => {
  if (typeof window === "undefined") {
    return null;
  }
  let pathname = window?.location?.pathname?.replace("/en/", "/");
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
    <div
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
        <Link to="/en" className={mainIcon}>
          <img src={scrolled ? logoalt : logo} alt="logo" />
        </Link>
        <div className={[content, display ? displayed : ""].join(" ")}>
          <Link to="/en">Get Ready</Link>
          <Link to="/en/features">Features</Link>
          <Link to="/en/about">About Us</Link>
          <Link to="/en/contact">Contact</Link>
          <Link to="/en/login" className={leftHidden}>
            Login
          </Link>
        </div>
        <div onClick={() => setDisplay(false)} className={rightButtons}>
          <Link to="/en/login" className={[login, rightHidden].join(" ")}>
            Login
          </Link>
          <Link to="/en/" className={search}>
            <img src={scrolled ? loupeBlack : loupe} alt="Search" />
          </Link>
          <LanguageSwitcher scrolled={scrolled} />
        </div>
      </Layout>
    </div>
  );
};
