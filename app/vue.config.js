const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "/", // 默认为'/'

  // 将构建好的文件输出到哪里，本司要求
  outputDir: "dist",

  // 放置生成的静态资源(js、css、img、fonts)的目录。
  assetsDir: "static",

  // 指定生成的 index.html 的输出路径
  indexPath: "index.html",

  // 是否使用包含运行时编译器的 Vue 构建版本。
  runtimeCompiler: false,

  // 多页面配置
  pages: {
    app: {
      // page 入口
      entry: "src/views/index/main.js",
      // 主页面
      template: "src/views/index/index.html",
      filename: "index.html",
      title: "app",
    },
    login: {
      entry: "src/views/login/login.js",
      template: "src/views/login/login.html",
      filename: "login.html",
      title: "登陆",
    },
    agreement: {
      entry: "src/views/agreement/agreement.js",
      template: "src/views/agreement/agreement.html",
      filename: "agreement.html",
      title: "用户协议",
    },
    notFound: {
      entry: "src/views/notFound/notFound.js",
      template: "src/views/notFound/notFound.html",
      filename: "notFound.html",
      title: "页面丢失",
    },
    frontPage: {
      entry: "src/views/frontPage/frontPage.js",
      template: "src/views/frontPage/frontPage.html",
      filename: "frontPage.html",
      title: "页面首页",
    },
    cloudMusic: {
      entry: "src/views/cloudMusic/cloudMusic.js",
      template: "src/views/cloudMusic/cloudMusic.html",
      filename: "cloudMusic.html",
      title: "网易云音乐首页",
    },
    qqMusic: {
      entry: "src/views/qqMusic/qqMusic.js",
      template: "src/views/qqMusic/qqMusic.html",
      filename: "qqMusic.html",
      title: "qq音乐首页",
    },
    my: {
      entry: "src/views/my/my.js",
      template: "src/views/my/my.html",
      filename: "my.html",
      title: "我的",
    },
  },
  
  chainWebpack: (config) => {
    // 配置别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"));
  },

  devServer: {
    host: "localhost", //--inline --host 10.101.244.39 --progress
    port: 8088, // 端口号
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器  open: 'Google Chrome'-默认启动谷歌
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        ws: true, // 代理的WebSockets
        changeOrigin: true, // 允许websockets跨域
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
