const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./"),
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            // name就是原始名称,hash使用的是MD5算法,ext就是后缀
            name: "[name]_[hash].[ext]",
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"), // dist目录开启服务器
    compress: true, // 是否使用gzip压缩
    port: 9000, // 端口号
    open: true, // 自动打开网页
  },
};
