import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";

export default () => {
  const title = "AI预测";

  return (
    <>
      <Nav />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
          随着人工智能的到来及其广泛应用，我们进入了一个新的时代。LetsGrow使用人工智能预测“将会发生什么？”未来几天需要多少能源；以及“对未来几周的收成有怎样的预测？”。有了这些可供你使用的预测，你就有了一个工具来确定结果是否与你期望的相符，或者是否需要改变策略。你可以根据数据对未来预测，而不是对日常已经发生的情况做出反应。这会使您的流程有重大提升。
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
