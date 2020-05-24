var config = require("./webpack.base.config");

config.devtool = "#source-map";

config.devServer = {
  noInfo: true,
  port: 18080,
};

module.exports = config;
