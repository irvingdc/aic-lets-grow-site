const util = require("util");
const child_process = require("child_process");
const exec = util.promisify(child_process.exec);

exports.onPostBuild = async (gatsbyNodeHelpers) => {
  const { reporter } = gatsbyNodeHelpers;
  const reportOut = (report) => {
    const { stderr, stdout } = report;
    if (stderr) reporter.error(stderr);
    if (stdout) reporter.info(stdout);
  };
  reporter.info("Deploying build w/ gatsby-plugin-s3");
  console.log("\n\n********************* deleting content.json");
  reportOut(await exec("rm -f -- ./public/content.json"));
};


exports.onPostBuild = async (gatsbyNodeHelpers) => {
    const { reporter } = gatsbyNodeHelpers;
    const reportOut = (report) => {
      const { stderr, stdout } = report;
      if (stderr) reporter.error(stderr);
      if (stdout) reporter.info(stdout);
    };
    reporter.info("Deploying build w/ gatsby-plugin-s3");
    console.log("\n\n********************* moving content.json");
    reportOut(await exec("mv ./content.json ./public/content.json"));
  };
  