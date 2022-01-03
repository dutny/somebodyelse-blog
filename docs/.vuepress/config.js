module.exports = {
  title: 'SOMEONE\'s blog',
  description: 'someone\'s blog',
  theme: 'reco',
  themeConfig: {
    logo: '/img/blog.png',
    subSidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'live',
        ariaLabel: 'live label',
        items: [
          { text: 'test', link: '/pages/blog/README.md' },
          // { text: 'test2', link: '/pages/blog/README.md' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/dutny/somebodyelse-blog' },
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          {
            title: '学前必读',
            path: '/'
          }
        ]
      },
      {
        title: '基础学习',
        path: '/handbook/ConditionalTypes',
        collapsable: false,
        children: [
          {
            title: '条件类型',
            path: '/handbook/ConditionalTypes'
          }, {
            title: '泛型',
            path: '/handbook/Generics'
          }
        ]
      }
    ]
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