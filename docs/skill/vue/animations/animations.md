---
title: 常用动画
---


# 常用动画

----
## 目录
**1. [每行文字逐渐出现](#jump1)**  
**2. [红包甩动](#jump2)**  
**2. [膨胀效果](#jump3)**  

### <span id="jump1">1.每行文字逐渐出现</span>
:sparkles: 例子1
<ClientOnly>
  <my-demo></my-demo>
</ClientOnly>
<!-- 测试代码 -->
<ClientOnly>
  <test></test>
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

### <span id="jump2">2.红包甩动</span>
:sparkles: 例子1
<ClientOnly>
  <redbag></redbag>
</ClientOnly>

``` js
    // html:
    <img class="redbag" src="" alt="../public/assets/img/redbag.png">

    // css:
    .redbag{
        animation: shake-rotate 4s ease-in-out infinite;
        z-index: 999;
    }
    @keyframes shake-rotate {
        2% {
            transform: translate(0, 0) rotate(3.5deg)
        }

        4% {
            transform: translate(0, 0) rotate(4.5deg)
        }

        6% {
            transform: translate(0, 0) rotate(1.5deg)
        }

        8% {
            transform: translate(0, 0) rotate(2.5deg)
        }

        10% {
            transform: translate(0, 0) rotate(3.5deg)
        }

        12% {
            transform: translate(0, 0) rotate(0.5deg)
        }

        14% {
            transform: translate(0, 0) rotate(-5.5deg)
        }

        16% {
            transform: translate(0, 0) rotate(-1.5deg)
        }

        18% {
            transform: translate(0, 0) rotate(1.5deg)
        }

        20% {
            transform: translate(0, 0) rotate(6.5deg)
        }

        22% {
            transform: translate(0, 0) rotate(3.5deg)
        }

        24% {
            transform: translate(0, 0) rotate(6.5deg)
        }

        26% {
            transform: translate(0, 0) rotate(-0.5deg)
        }

        28% {
            transform: translate(0, 0) rotate(7.5deg)
        }

        30% {
            transform: translate(0, 0) rotate(6.5deg)
        }

        32% {
            transform: translate(0, 0) rotate(-3.5deg)
        }

        34% {
            transform: translate(0, 0) rotate(-1.5deg)
        }

        36% {
            transform: translate(0, 0) rotate(3.5deg)
        }

        38% {
            transform: translate(0, 0) rotate(7.5deg)
        }

        40% {
            transform: translate(0, 0) rotate(-0.5deg)
        }

        42% {
            transform: translate(0, 0) rotate(3.5deg)
        }

        44% {
            transform: translate(0, 0) rotate(7.5deg)
        }

        46% {
            transform: translate(0, 0) rotate(7.5deg)
        }

        48% {
            transform: translate(0, 0) rotate(3.5deg)
        }

        50% {
            transform: translate(0, 0) rotate(0.5deg)
        }

        52% {
            transform: translate(0, 0) rotate(2.5deg)
        }

        54% {
            transform: translate(0, 0) rotate(5.5deg)
        }

        56% {
            transform: translate(0, 0) rotate(2.5deg)
        }

        58% {
            transform: translate(0, 0) rotate(-4.5deg)
        }

        60% {
            transform: translate(0, 0) rotate(-4.5deg)
        }

        62% {
            transform: translate(0, 0) rotate(7.5deg)
        }

        64% {
            transform: translate(0, 0) rotate(0.5deg)
        }

        66% {
            transform: translate(0, 0) rotate(2.5deg)
        }

        68% {
            transform: translate(0, 0) rotate(2.5deg)
        }

        70% {
            transform: translate(0, 0) rotate(5.5deg)
        }

        72% {
            transform: translate(0, 0) rotate(5.5deg)
        }

        74% {
            transform: translate(0, 0) rotate(-2.5deg)
        }

        76% {
            transform: translate(0, 0) rotate(7.5deg)
        }

        78% {
            transform: translate(0, 0) rotate(2.5deg)
        }

        80% {
            transform: translate(0, 0) rotate(-6.5deg)
        }

        82% {
            transform: translate(0, 0) rotate(-0.5deg)
        }

        84% {
            transform: translate(0, 0) rotate(2.5deg)
        }

        86% {
            transform: translate(0, 0) rotate(5.5deg)
        }

        88% {
            transform: translate(0, 0) rotate(0.5deg)
        }

        90% {
            transform: translate(0, 0) rotate(-0.5deg)
        }

        92% {
            transform: translate(0, 0) rotate(-1.5deg)
        }

        94% {
            transform: translate(0, 0) rotate(-0.5deg)
        }

        96% {
            transform: translate(0, 0) rotate(0.5deg)
        }

        98% {
            transform: translate(0, 0) rotate(-4.5deg)
        }

        0%,
        100% {
            transform: translate(0, 0) rotate(0)
        }
    }
```

### <span id="jump3">3.膨胀效果</span>
:sparkles: 例子1
<ClientOnly>
  <expand></expand>
</ClientOnly>

``` js
    // html:
    <div v-if="donghuaShow">
      <img @touchstart.prevent='()=>null' 
      onclick="return false" 
      width="100%"
      height="100%"
      class="bounce"
      src="../public/assets/img/expand.png"
      alt="">
    </div>

    // css:
    .bounce{
        animation: bounce-in 2s .5s ease-in-out infinite;
    }

    @keyframes bounce-in {
    20%{  transform: scale(.9);}
    40%{  transform: scale(1.05);}
    60%{  transform: scale(.95);}
    80%{  transform: scale(1);}
    100%{  transform: scale(1);}
    }
```