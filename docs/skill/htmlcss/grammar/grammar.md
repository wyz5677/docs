---
title: htmlcss语法总结
---

## 目录
**1. [input标签常用](#jump1)**  

### <span id="jump1">1.input标签常用</span>

:sparkles: 例子1 
``` js
    // html 
    <input type="text" style="outline: none;text-align: center;width:80%;font-size:20px;" ref="otherInput" v-show="showOtherMoney" v-model="otherMoney" @input="otherMoney = otherMoney.replace(/\D/g,'')">

    // js控制聚焦
    this.$nextTick( () =>{
        this.$refs.otherInput.focus()
    } )
```