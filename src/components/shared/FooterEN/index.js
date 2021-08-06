import { Link } from "gatsby";
import React from "react";
import Layout from "components/shared/Layout";
import { grayContent, pathClass, content } from "./index.module.less";
import logo from "images/logoalt.png";

export default ({ path }) => {
  return (
    <footer>
      <Layout>
        <div className={pathClass}>
          <p>
            <b>LetsGrow.com.cn</b>
            {path ? <i>/</i> : null}
            {path}
          </p>
        </div>
        <div className={content}>
          <div>
            <div>
              <h4>How can we assist?</h4>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://gpe.letsgrow.com/psychro"
              >
                Psychrometic Calculator
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://gpe.letsgrow.com/"
              >
                GPE Simulator
              </a>
            </div>
            <div>
              <h4>LetsGrow.com.cn</h4>
              <Link to="/en/about">About Us</Link>
              <Link to="/en/contact">Contact</Link>
            </div>
          </div>

          <img src={logo} alt="logo" />
        </div>
      </Layout>
      <div className={grayContent}>
        <Layout>
          <p>
            © {new Date().getFullYear()} LetsGrow.com.cn
            <br />
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              target="_blank"
              rel="noopener"
            >
              京ICP备19007319号-7
            </a>
          </p>
        </Layout>
      </div>
    </footer>
  );
};
