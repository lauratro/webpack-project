module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          //without additional settings, this will refference .babelrc
          loader: "babel-loader",
        },
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    static: "./dist",
  },
};
