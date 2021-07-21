import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";
import Meta from "components/shared/Meta";

export default () => {
  let title = "数据枢纽";
  return (
    <>
      <Nav />
      <Meta url="/feature/datahub/" />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
          近年来，对数据的需求呈指数级增长，然而，这种需求存在的时间要远超于此。LetsGrow在数据分析方面已经活跃了20多年。我们于2003年起开始与气候计算机自动连接。2010年，在客户的明确许可下，外部公司开始使用LetsGrow平台作为独立的数据枢纽。
          目前，超过50多个园艺产业的组织将LetsGrow作为数据中心，用以掌控1500多个温室苗圃。温室所有者在任何时候都可以完全控制自己的数据，并选择想要共享的信息。
          LetsGrow的部分核心优势在于，向客户提供远比数据本身更具影响力的服务。LetsGrow为合作伙伴提供增值服务的例子不胜枚举，从而不断加强现有的合作伙伴关系。携手共进，使我们能够不断提升客户服务。数据的意义要超越数据本身。数据在讲诉一个故事，理解故事的本质，抓住核心原则，并分享这些原则，作为公司日常业务活动的指导方针，支持他们的目标……这就是我们探讨的话题，也是我们全力以赴的事业。
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
