module.exports = {
  title: "李桂琴个人博客",
  description: "我的个人网站",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: `/logo.ico` }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: "/", // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      // { text: "接口定义", link: "/apiword.md" },
      { text: "前端基础", link: "/api.html" },
      // 下拉列表的配置
      {
        text: "Languages",
        items: [
          { text: "Chinese", link: "/language/chinese" },
          { text: "English", link: "/language/English" }
        ]
      }
    ],
    sidebar: [
      {
        title: "前端",
        collapsable: false,
        children: [
          ["/foo/one", "one"],
          ["/foo/two", "two"]
        ]
      },
      {
        title: "后端",
        collapsable: false,
        children: [
          ["/bar/three", "three"],
          ["/bar/four", "four"]
        ]
      }
    ],
    // sidebar: {
    //   // 侧边栏在 /foo/ 上
    //   "/foo/": ["", "/one.html", "/two"]
    //   // 侧边栏在 /bar/ 上
    //   "/bar/": ["", "three", "four"]
    // },
    // sidebar: {
    //   "/notes/frontEnd/": [
    //     {
    //       title: "前端",
    //       collapsable: false,
    //       children: [
    //         "/VueJS组件编码规范.md",
    //         "/notes/frontEnd/vue-cli脚手架快速搭建项目.md",
    //         "/notes/frontEnd/深入理解vue中的slot与slot-scope",
    //         "/notes/frontEnd/webpack入门",
    //         "/notes/frontEnd/PWA介绍及快速上手搭建一个PWA应用"
    //       ]
    //     }
    //   ],
    //   "/notes/backEnd/": [
    //     {
    //       title: "后端",
    //       collapsable: true,
    //       children: [
    //         "/notes/backEnd/nginx入门",
    //         "/notes/backEnd/CentOS如何挂载磁盘"
    //       ]
    //     }
    //   ]
    // },
    // sidebar: "auto", // 侧边栏配置
    sidebarDepth: 2 // 侧边栏显示2级
  }
};
