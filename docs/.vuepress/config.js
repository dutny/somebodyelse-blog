module.exports = {
  title: 'SOMEONE\'s blog',
  description: 'someone\'s blog',
  theme: 'vdoing',
  themeConfig: {
    logo: '/img/blog.png',
    subSidebar: 'auto',
    nav: [
      {
        text: 'Home',
        link: '/',
        ariaLabel: 'welcome to my home',
        items: [
          { text: 'welcome', link: '/welcome/welcome.md' }
        ]
      },
      {
        text: 'index',
        ariaLabel: 'welcome to my home',
        items: [
          { text: 'index', link: '/handbook/ConditionalTypes.md' },
        ]
      },
      {
        text: 'GitHub',
        ariaLabel: 'welcome to my home',
        link: 'https://github.com/dutny/somebodyelse-blog'
      },
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          {
            title: '学前必读',
            path: '/welcome/welcome'
          }
        ]
      }
    ],
    footer: {
      createYear: '2021',
      copyrightInfo: '粤ICP备2022020342号-1'
    },
    // 博主信息，显示在首页侧边栏
    blogger: {
      avatar: 'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg',
      name: 'Social',
      slogan: '前端菜鸡一枚',
    },
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': 'public/img'
      }
    }
  }
}