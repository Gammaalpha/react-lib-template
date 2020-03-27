var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    libraryTarget: "commonjs2",
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".scss", ".css"]
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: ["babel-loader", "ts-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: "url-loader?limit=10000"
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          { loader: "sass-loader", options: { sourceMap: true } }
        ],
        include: /\.module\.scss$/
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  plugins: []
};
