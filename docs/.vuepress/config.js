const moment = require('moment');

module.exports = {
    base:"/docs/",
    title:'我的博客',
    description:'我的描述',
    head: [
      // seo优化
      ["mate",{name: "author",content: "奕舟"}],
      ["mate",{name: "keywords",content: "vuepress介绍,vuepress说明,奕舟"}],
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    plugins: {
      '@vuepress/back-to-top': true,
      '@vuepress/last-updated':{
        transformer: (timestamp) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale('zh-cn')
          return moment(timestamp).format("LLLL")
        }
      },
    },
    themeConfig: {
      lastUpdated: '更新时间', // string | boolean
      logo: '/assets/img/logo.png',
      nav: [
        { text: '主页', link: '/' },
        {
          text: 'js',
          items: [
            { text: 'js', items: [
              { text: '常用js对象等api', link: '/skill/javascript/objectApi/j-arrayApi' },
              { text: '常用dom操作', link: '/skill/javascript/dom/dom-css' },
            ] }
          ]
        },
        {
          text: 'vue',
          items: [
            { text: 'vue', items: [
              { text: '语法', link: '/skill/vue/grammar/grammar' },
              { text: '代码优化', link: '/skill/vue/code/code' }
            ] }
          ]
        },
        { text: '外链', link: 'https://google.com' },
      ],
      sidebar: {
        '/skill/javascript/': [
          {
            title: '常用js对象等api',
            collapsable: false,
            children: [
              { title: '数组常用api', path:'objectApi/j-arrayApi'},
              { title: '字符串常用api', path:'objectApi/j-stringApi'}
            ]
          },
          {
            title: '常用dom操作',
            collapsable: false,
            children: [
              { title: 'js控制css', path:'dom/dom-css'}
            ]
          },
        ],
        '/skill/vue/': [
          {
            title: '常用语法',
            collapsable: false,
            children: [
              { title: '常用语法', path:'grammar/grammar'}
            ]
          },
          {
            title: '代码优化',
            collapsable: false,
            children: [
              { title: '代码优化', path:'code/code'},
            ]
          }
        ]
      }
    }
  }