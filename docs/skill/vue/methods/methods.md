---
title: vue中实用方法
---

## 目录
**1. [后退页面时回到滚动记录的位置](#jump1)**  
**2. [前端倒计时功能](#jump2)**  

### <span id="jump1">1.后退页面时回到滚动记录的位置</span>

:tropical_drink: 需求分析  
    用户在滚动到页面1某个位置时候点击了跳转 ,跳转后点击回退后回退到页面1时,默认会回到页面顶部,而我们想回到用户之前滚动的位置

:sparkles: 解决方案
``` js {12}
//路由中:
    
const router = new VueRouter({
  mode: 'history',
  [
      {
        path: '/',
        name: 'home',
        component: home,
        meta: {
          title: 'home',
          keepAlive: true
        }
      }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
```

``` js
//:在组件中

<keep-alive >
   <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>
```

### <span id="jump2">1.前端倒计时功能</span>

:tropical_drink: 需求分析  
  前端倒计时功能

:sparkles: 解决方案   
![avatar](./img/countDown.png)