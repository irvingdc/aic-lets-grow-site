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
              <h4>我们怎样助力？</h4>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://gpe.letsgrow.com/psychro"
              >
                焓湿图计算器
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://gpe.letsgrow.com/"
              >
                GPE模拟器
              </a>
            </div>
            <div>
              <h4>LetsGrow.com.cn</h4>
              <Link to="/en/about">关于我们</Link>
              <Link to="/en/Contact">联系我们</Link>
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
