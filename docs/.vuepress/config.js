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
      // {
      //   title: "前端",
      //   collapsable: false,
      //   children: [
      //     ["/foo/one", "one"],
      //     ["/foo/two", "two"]
      //   ]
      // },
      // {
      //   title: "后端",
      //   collapsable: false,
      //   children: [
      //     ["/bar/three", "three"],
      //     ["/bar/four", "four"]
      //   ]
      // },
      {
        title: "面试题",
        collapsable: false,
        children: [
          {
            title: "HTML",
            collapsable: true,
            children: [["/interview/HTML/HTML面试", "HTML"]]
          },
          {
            title: "CSS",
            collapsable: true,
            children: [["/interview/CSS/CSS面试", "CSS"]]
          },
          {
            title: "JS",
            collapsable: true,
            children: [["/interview/JS/JS面试", "JS"]]
          },
          {
            title: "ES6",
            collapsable: true,
            children: [["/interview/ES6/ES6面试", "ES6"]]
          },
          {
            title: "VUE",
            collapsable: true,
            children: [
              [
                "/interview/vue/vue路由跳转四种方式",
                "vue 路由跳转四种方式 (带参数)"
              ]
            ]
          }
        ]
      }
    ],
    // sidebar: "auto", // 侧边栏配置
    sidebarDepth: 2 // 侧边栏显示2级
  }
};
