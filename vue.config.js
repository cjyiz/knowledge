
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 打包路径配置
  publicPath: process.env.NODE_ENV === "production" ? "/manager/" : "/",
  // devServer 选项单独配置
  devServer: {
    // 设置主机地址
    // host: "localhost", // 设置默认端口
    // port: 8081, // 设置代理
    proxy: {
      "/datav": {
        // 目标 API 地址
        target: "http://106.15.228.37:81/", // 阿里云服务
        ws: false,
        changeOrigin: true,
        pathRerite: {
          "^/apis": ""
        }
      },
    }
  },
  lintOnSave: true,
}