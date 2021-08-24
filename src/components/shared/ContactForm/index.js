import React, { useEffect, useState } from "react";
import {
  container,
  content,
  pairClass,
  buttonClass,
  successClass,
} from "./index.module.less";
import Layout from "components/shared/Layout";
import Button from "components/shared/Button";
import Input from "../Input";

export default () => {
  let [values, setValues] = useState({
    data_agreement: true,
  });
  let [loading, setLoading] = useState(false);
  let [sent, setSent] = useState(false);
  let [validateNow, setValidateNow] = useState(false);

  let handleChange = (value, name) => {
    setValidateNow(false);
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const urlObject = new URL(window.location.href);
    let email = urlObject.searchParams.get("email");
    if (!!email) {
      handleChange(decodeURIComponent(email), "email");
    }
  }, []);


  let terminate = () => {
    console.log("finished");
  };

  let sendData = (e) => {
    e.preventDefault();
    console.log("values",values)
    if (loading) {
      console.log("loading")
      return;
    }
    setValidateNow(true);
    if (
      !values.name ||
      !values.email ||
      !values.question ||
      !values.phone
    ) {
      console.log("nothing...")
      return false;
    }
    setLoading(true);
    console.log("Sending values", values)
    fetch(`/contact.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "success") {
          setLoading(false);
          terminate();
        } else throw data;
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        alert(
          "An error happened, please call us on +86（0）10 6501 6548"
        );
      });
  };

  return (
    <div className={container}>
      <Layout>
        <div className={content}>
          <form onSubmit={sendData}>
            <h1>问题</h1>
            <p>请留下您的联系方式，我们将会第一时间联系您。</p>

            <Input
              onChange={handleChange}
              label="姓名"
              value={values["name"]}
              name="name"
              disabled={loading || sent}
              required
              validateNow={validateNow}
            />
            <Input
              onChange={handleChange}
              label="电子邮箱"
              value={values["email"]}
              name="email"
              type="email"
              disabled={loading || sent}
              required
              validateNow={validateNow}
            />
            <Input
              onChange={handleChange}
              label="电话号码"
              value={values["phone"]}
              name="phone"
              required
              type="number"
              disabled={loading || sent}
            />
            <Input
              onChange={handleChange}
              label="您的问题"
              value={values["question"]}
              name="question"
              type="textarea"
              required
              disabled={loading || sent}
              validateNow={validateNow}
            />
            <Input
              onChange={handleChange}
              label="我同意我提供的数据将会被LetsGrow.com.cn处理"
              value={values["data_agreement"]}
              name="data_agreement"
              type="checkbox"
              disabled={loading || sent}
            />
            <div className={buttonClass}>
              {" "}
              {sent ? (
                <p className={successClass}>
                  {" "}
                  Thank you! A member of our team will contact you shortly.
                </p>
              ) : (
                <Button disabled={loading}>
                  {loading ? "Loading..." : "提交"}
                </Button>
              )}
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
};
