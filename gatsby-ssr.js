var fs = require("fs");
const h2p = require("html2plaintext");
const { renderToString } = require("react-dom/server");
var HTMLParser = require("node-html-parser");

exports.replaceRenderer = ({ bodyComponent }) => {
  let bodyHTML = renderToString(bodyComponent);
  let doc = HTMLParser.parse(bodyHTML);

  let title = doc?.querySelector("h1")?.text || "";

  bodyHTML = bodyHTML
    .replace(/<nav(.*)<\/nav>/g, "")
    .replace(/<footer(.*)<\/footer>/g, "")
    .replace(/<aside(.*)<\/aside>/g, "")
    .replace(/<h1(.*)<\/h1>/g, "");
  let text = h2p(bodyHTML).replace(/(<([^>]+)>)/gi, "");
  text = text.replace(/"/g, "").replace(/\n/g, " ").slice(0, 9000);

  let bodyText = `{
    "url": "${bodyComponent?.props?.children?.props?.url}",
    "text": "${text || ""}",
    "title": "${title}"
  }`;

  console.log("ITEM => ", bodyText);

  try {
    fs.appendFileSync("./content.json", `${bodyText},`);
  } catch (err) {
    // An error occurred
    console.error(err);
  }
};
