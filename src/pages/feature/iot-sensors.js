import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";
import Meta from "components/shared/Meta";

export default () => {
  let title = "物联网传感器";
  return (
    <>
      <Nav />
      <Meta url="/feature/iot-sensors/" />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
          LetsGrow.com.cn是一个开放灵活的平台，能将任何种类的IoT设备连接起来。中国的IoT设备需要遵守相关的通讯协议规则规范。在LetsGrow.com.cn，我们相信质量与可靠对IoT产品而言至关重要。LetsGrow.com.cn已经可以连接到
        </p>
        <ul>
          <li>
            热成像照相机（Thermoview，由豪根道（北京）农业技术有限公司提供）
          </li>
          <li>
            集成算法分析的摄像头（Gear
            Box，由豪根道（北京）农业技术有限公司提供）
          </li>
          <li>
            温室环境采集系统（Trutina，由豪根道（北京）农业技术有限公司提供）
          </li>
        </ul>
        <p>
          LetsGrow.com.cn在中国同样可以连接任何类型的IoT传感器，然而以质量为先，我们公司对任何连接到平台的传感器进行质量认证
          <br />
          因为我们笃信质量与可持续才是最重要的。
        </p>
      </Layout>
      <Footer
        path={
          <>
            特点<i>/</i>
            {title}
          </>
        }
      />
    </>
  );
};
