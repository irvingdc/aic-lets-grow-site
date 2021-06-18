import React from "react";
import Header from "components/shared/Header";
import Layout from "components/shared/Layout";
import Footer from "components/shared/Footer";
import Nav from "components/shared/Nav";

export default () => {
  const title = "分析工具";

  return (
    <>
      <Nav />
      <Header>
        <h1>{title}</h1>
      </Header>
      <Layout>
        <h2>{title}</h2>
        <p>
        MyLetsGrow有各种各样的工具来可视化您的数据，方便您及时发现异常；可以分析几天内的图表，或将数据压缩到每天或每小时的平均值；比较两个作物周期或不同的时间跨度；还有很多其他的选择。最重要的是，您可以根据时间或异常情况设置每个文本或电子邮件的通知。让您随时掌握信息和控制权。
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
