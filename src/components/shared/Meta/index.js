import React from "react";
import { Helmet } from "react-helmet";
import logo from "images/icon.png";
import METADATA from "src/utils/metadata.js";
import og from "images/photos/main.jpeg";

export default ({
  url,
  defaultTitle,
  defaultDescription,
  defaultDeaturedImage,
}) => {
  let canonical =
    "https://www.letsgrow.com.cn" +
    url
      ?.replace("https://www.letsgrow.com.cn", "")
      .replace("http://www.letsgrow.com.cn", "")
      .replace("https://letsgrow.com.cn", "")
      .replace("http://letsgrow.com.cn", "");
  let data = METADATA[url] || {};
  let { title, description, featuredImage } = data;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{defaultTitle || title}</title>
        <link
          rel="canonical"
          href={canonical.replace(/\/\/+/g, "/").replace(/:\//g, "://")}
        />
        <meta name="description" content={defaultDescription || description} />
        <link rel="shortcut icon" href={logo} />
        <meta name="theme-color" content="#ffffff" />
        <html lang="" />

        <meta property="og:title" content={title} />
        <meta
          property="og:image"
          content={
            defaultDeaturedImage ||
            `http://www.letsgrow.com.cn${featuredImage || og}`
          }
        />
        <meta
          property="og:image:secure_url"
          content={
            defaultDeaturedImage ||
            `https://www.letsgrow.com.cn${featuredImage || og}`
          }
        />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
      </Helmet>
    </>
  );
};
