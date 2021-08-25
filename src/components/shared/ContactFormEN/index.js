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
    fetch(`/wordpress/contact.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "success") {
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
            <h1>Questions</h1>
            <p>Leave your contact information and we will reach out to you.</p>

            <Input
              onChange={handleChange}
              label="Name"
              value={values["name"]}
              name="name"
              disabled={loading || sent}
              required
              validateNow={validateNow}
            />
            <Input
              onChange={handleChange}
              label="Email"
              value={values["email"]}
              name="email"
              type="email"
              disabled={loading || sent}
              required
              validateNow={validateNow}
            />
            <Input
              onChange={handleChange}
              label="Phone Number"
              value={values["phone"]}
              name="phone"
              type="number"
              disabled={loading || sent}
            />
            <Input
              onChange={handleChange}
              label="Your Question"
              value={values["question"]}
              name="question"
              type="textarea"
              required
              disabled={loading || sent}
              validateNow={validateNow}
            />
            <Input
              onChange={handleChange}
              label="I agree that my data will be processed by LetsGrow.com"
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
                  {loading ? "Loading..." : "Submit"}
                </Button>
              )}
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
};
