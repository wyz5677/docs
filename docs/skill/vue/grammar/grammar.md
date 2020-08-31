---
title: vue常用语法
---

## 目录
**1. [watch](#jump1)**  

### <span id="jump1">1.watch</span>

:tropical_drink: 解释  
    watch是用来侦听data里面一个一个变量的变化,并且可以拿到新值和旧值(也可以监听整个vue实例)   
    一般情况下是用来监控data值的变化,当值变化后去做某事，同时它也可以监控Vue实例中的属性

:sparkles: 例子1 
``` js
    watch:{
        isShow(newVal){
            this.show = newVal;
        }
    }
```
#### watch的深度监听和首次执行
:tropical_drink: 解释  
   deep，默认值是 false，代表是否深度监听.  
   immediate:true代表如果在 wacth 里声明了之后，就会立即先去执行里面的handler方法，如果为 false就跟我们以前的效果一样，不会在绑定的时候就执行.  
   
:sparkles: 例子1
``` js
    watch: {
        btnObj: {
            handler: function(newVal,oldVal) {
                if(!!this.sign_img && this.check){
                    this.submit_flag = true
                    this.sign_flag = '1'
                }else{
                    this.submit_flag = false
                    this.sign_flag = '0'
                }
            },
            deep: true,
            immediate: true
        }
    }
```

:sparkles: 例子2 (监听对象的属性)
``` js
    watch: {
        '$route.path': {
            handler: function(newVal,oldVal) {
                if(newVal === '/login') {
                    console.log('欢迎进入登录页面')
                }else if (newVal === '/register') {
                    console.log('欢迎进入注册页面')
                }
            }
        }
    }
```