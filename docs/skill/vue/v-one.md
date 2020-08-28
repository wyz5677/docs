---
title: vue常用语法
---


## watch
### watch的深度监听和首次执行
:sparkles: 解释  
   deep，默认值是 false，代表是否深度监听.  
   immediate:true代表如果在 wacth 里声明了之后，就会立即先去执行里面的handler方法，如果为 false就跟我们以前的效果一样，不会在绑定的时候就执行.  
   
:sparkles: 代码展示
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