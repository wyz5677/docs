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
      '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github',
        // 其他的 Vssue 配置
        owner: 'OWNER_OF_REPO',
        repo: 'NAME_OF_REPO',
        clientId: 'YOUR_CLIENT_ID',
        clientSecret: 'YOUR_CLIENT_SECRET',
      }
    },
    themeConfig: {
      lastUpdated: '更新时间', // string | boolean
      logo: '/assets/img/logo.png',
      nav: [
        { text: '主页', link: '/' },
        {
          text: 'htmlcss',
          items: [
            { text: 'htmlcss', items: [
              { text: '语法', link: '/skill/htmlcss/grammar/grammar' },
            ] }
          ]
        },
        {
          text: 'js',
          items: [
            { text: 'js', items: [
              { text: '常用js对象等api', link: '/skill/javascript/objectApi/j-arrayApi' },
              { text: '常用dom操作', link: '/skill/javascript/dom/dom-css' },
              { text: 'es6总结', link: '/skill/javascript/es6/es6' },
            ] }
          ]
        },
        {
          text: 'vue',
          items: [
            { text: 'vue', items: [
              { text: '语法', link: '/skill/vue/grammar/grammar' },
              { text: '代码优化', link: '/skill/vue/code/code' },
              { text: '实用方法', link: '/skill/vue/methods/methods' },
              { text: '实用工具', link: '/skill/vue/utils/skills' },
              { text: '常用动画', link: '/skill/vue/animations/animations'},
            ] }
          ]
        },
        {
          text: 'git',
          items: [
            { text: 'git', items: [
              { text: 'git常用操作', link: '/skill/git/git' },
            ] }
          ]
        },
        {
          text: 'interest',
          items: [
            { text: 'interest', items: [
              { text: '兴趣', link: '/skill/interest/interest' },
            ] }
          ]
        },
        {
          text: 'interview',
          items: [
            { text: 'interview', items: [
              { text: '面试', link: '/skill/interview/interview' },
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
          {
            title: 'es6总结',
            collapsable: false,
            children: [
              { title: 'promise', path:'es6/es6'}
            ]
          },
        ],
        '/skill/vue/': [
          {
            // title: '常用语法',
            collapsable: false,
            children: [
              { title: '常用语法', path:'grammar/grammar'}
            ]
          },
          {
            // title: '代码优化',
            collapsable: false,
            children: [
              { title: '代码优化', path:'code/code'},
            ]
          },
          {
            // title: '实用方法',
            collapsable: false,
            children: [
              { title: '实用方法', path:'methods/methods'},
            ]
          },
          {
            title: '实用工具',
            collapsable: false,
            children: [
              { title: '实用技能', path:'utils/skills'},
              { title: '过滤器', path:'utils/filters'},
            ]
          },
          {
            // title: '常用动画',
            collapsable: false,
            children: [
              { title: '常用动画', path:'animations/animations'},
            ]
          }
        ],
        '/skill/htmlcss/': [
          {
            // title: '常用语法',
            collapsable: false,
            children: [
              { title: '常用语法', path:'grammar/grammar'}
            ]
          },
        ],
        '/skill/git/': [
          {
            // title: '常用操作',
            collapsable: false,
            children: [
              { title: '常用操作', path:'git'}
            ]
          },
        ],
        '/skill/interest/': [
          {
            // title: '兴趣爱好',
            collapsable: false,
            children: [
              { title: '兴趣爱好', path:'interest'}
            ]
          },
        ],
        '/skill/interview/': [
          {
            // title: '兴趣爱好',
            collapsable: false,
            children: [
              { title: '面试', path:'interview'}
            ]
          },
        ]
      }
    }
  }