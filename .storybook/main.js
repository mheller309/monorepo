const customConfig = require("./webpack.config.js");

module.exports = {
  stories: ["../packages/**/*.stories.@(ts|tsx)"],
  addons: [],
  webpackFinal: async (config, { configType }) => {
    return customConfig({ config, mode: configType });
  },
};
