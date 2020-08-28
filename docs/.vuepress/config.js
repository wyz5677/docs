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
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp) => {
            // 不要忘了安装 moment
            const moment = require('moment')
            moment.locale('zh-cn')
            return moment(timestamp).format("LLLL")
          }
        }
      ]
    ],
    themeConfig: {
      lastUpdated: '更新时间', // string | boolean
      logo: '/assets/img/logo.png',
      nav: [
        { text: '主页', link: '/' },
        {
          text: '技术总结',
          items: [
            { text: 'js', items: [
              { text: '语法', link: '/skill/javascript/objectApi/' },
            ] },
            { text: 'vue', items: [
              { text: '语法', link: '/skill/vue/v-one' },
              { text: '代码优化', link: '/skill/vue/code/code' }
            ] }
          ]
        },
        { text: '外链', link: 'https://google.com' },
      ],
      sidebar:[
        {
          title: 'js对象等api',   // 必要的
          path: '/skill/javascript/objectApi/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            {
              title: '数组api',   // 必要的
              path: '/skill/javascript/objectApi/j-arrayApi',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            },
            {
              title: '对象api',   // 必要的
              path: '/skill/javascript/objectApi/j-stringApi',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            }
          ]
        }
      ]
    }
  }