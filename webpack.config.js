let path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
    publicPath: "dist/"
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // fallback: "style-loader",
          use: "css-loader"
        })
        // use: ["style-loader", "css-loader"]
      }
    ]
  },
  devtool= "source-map",
  plugins: [new ExtractTextPlugin("styles.css")]
};

module.exports = (env, options) => {
  let isProduction = options.mode === "production";
  conf.devtool = isProduction ? "source-map" : "eval-source-map";
  return conf;
};
