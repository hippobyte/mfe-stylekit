const package = require('./package.json');
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "hippobyte",
    projectName: "stylekit",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["react", "react-dom", /^@hippobyte\/.+/],
    output: {
      filename: (pathData) => {
        const namespace = package.name.split('@').pop().split('/').join('.');
        return pathData.chunk.name === 'main' ? `${namespace}.[name].[contenthash].js` : `${namespace}.[name]/[name].[contenthash].js`;
      }
    }
  });
};
