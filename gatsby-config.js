const path = require("path");
module.exports = {
  siteMetadata: {
    title: "LetsGrow",
  },
  plugins: [
    /*{
      resolve: "gatsby-source-wordpress",
      options: {
        url: "",
      },
    },*/
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-less",
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            primary: "#8dbe40",
            secondary: "#5c7d2b",
            lightgray: "#f5f7f3",
            link: "#1890ff",
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.appinchina.co",
        sitemap: "https://www.appinchina.co/sitemap.xml",
        policy:
          process.env.GATSBY_ACTIVE_ENV === "QA"
            ? [{ userAgent: "*", disallow: ["/"] }]
            : [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, `src`, `images`),
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        images: path.join(__dirname, "src/images"),
        components: path.join(__dirname, "src/components"),
        stylesheets: path.join(__dirname, "src/styles"),
        locales: path.join(__dirname, "src/locales"),
      },
    },
  ],
};
