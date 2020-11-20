---
title: vue常用语法
---

## 目录
**1. [watch](#jump1)**  
**2. [动态样式](#jump2)**  
np**2. [绑定事件](#jump3)**  

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

### <span id="jump2">2.动态样式</span>

:tropical_drink: 解释  
    v-bind绑定动态样式(常用的是绑定对象,数组我不常用)
   
:sparkles: 例子1 
``` js {1}
    <div style="font-size:50px;" :style="{'color':selectMoney?'#333333':'#999999'}">
        ¥ {{selectMoney}}
    </div>
```

:sparkles: 例子2
``` js {1}
    <p class="bottomPrice" :class='{"active":activity_times}'>售价<span>123</span>{{price}}</p>

    // less
    .bottomPrice{
      &.active {
        color: #55cbba;
      }
    }
    // 注意 对象的属性如果带-就必须要带""
```

:sparkles: 例子3
``` js
    <p :class="TodayProfit > 0 ? 'green' : 'red'">123</p>
```

:sparkles: 例子4
``` js
    <div :class="btnClass[item.staus]"></div>
    <div :class="btnClass[item.staus]"></div>
    <div :class="btnClass[item.staus]"></div>

    btnClss:{
        '0':"right-btn no-active"
        '1':"right-btn active"
        '2':"right-btn success"
    }
    // 多状态控制
```

### <span id="jump3">3.绑定事件</span>

:tropical_drink: 解释  
    v-bind绑定事件有注意的地方
   
:sparkles: 例子1 
``` js
    // abc为方法 可以不加()   即@click="abc()"也行
    <div @click="abc" class="rotate-record"></div>
```

:sparkles: 例子2
``` js
    // 如果用了()=>{}  内部事件必须要()调用 不然不生效
    <div @click="()=>{abc()}" class="rotate-record"></div>
```

