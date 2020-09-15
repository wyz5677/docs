---
title: 常用动画
---


# 常用动画

----
## 目录
**1. [每行文字逐渐出现](#jump1)**  

### <span id="jump1">1.每行文字逐渐出现</span>
:sparkles: 例子1
<ClientOnly>
  <my-demo></my-demo>
</ClientOnly>

``` js
    // html:
    <div   class="Flex-fadeIn1" style="opacity: 0;"> 中华人民共和国</div>
    <div   class="Flex-fadeIn2" style="opacity: 0;"> 中华人民共和国</div>
    <div   class="Flex-fadeIn3" style="opacity: 0;"> 中华人民共和国</div>
    <div   class="Flex-fadeIn4" style="opacity: 0;"> 中华人民共和国</div>

    // css:
    @-webkit-keyframes fadeIn {
    0% {
    opacity: 0; 
    }
    50% {
    opacity: 0.5; 
    }
    100% {
    opacity: 1; 
    }
    }
    
    .Flex-fadeIn1
    {
    // 动画名 持续时间 延迟时间 循环次数 动画最终样子
    animation: fadeIn 2s 0s 1 forwards;
    }
    .Flex-fadeIn2
    {
    animation: fadeIn 2s 1s 1 forwards;
    }
    .Flex-fadeIn3
    {
    animation: fadeIn 2s 2s 1 forwards;
    }
    .Flex-fadeIn4
    {
    animation: fadeIn 2s 3s 1 forwards;
    }
```
