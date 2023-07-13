const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.jsx",
  },
  output: {
    path: path.join(__dirname, "./public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: [/\.(js|jsx)$/],
        use: ["babel-loader"],
      },
      {
        test: [/\.(css)$/],
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 8085,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".png"],
  },
  devtool: "source-map",
};
