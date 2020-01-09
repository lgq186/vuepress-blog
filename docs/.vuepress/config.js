module.exports = {
  title: "liguiqin's blog",
  description: "我的个人网站",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/logo.jpg" }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: "/", // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      // { text: "接口定义", link: "/apiword.md" },
      { text: "接口字段定义", link: "/api.html" }
      // { text: "附录：错误码", link: "/error.md" }
    ],
    // sidebar: {
    //   "/": [
    //     "/", //指的是根目录的md文件 也就是 README.md 里面的内容
    //     "apiword", // 根目录创建 apiword.md文件
    //     "api", // 根目录创建 api.md文件
    //     "error" // 根目录创建 error.md文件
    //   ]
    // },
    sidebar: "auto", // 侧边栏配置
    sidebarDepth: 2 // 侧边栏显示2级
  }
};
