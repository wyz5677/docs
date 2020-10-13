---
title: vue中实用工具
---

## 目录
**1. [函数防抖和函数节流](#jump1)**  
**2. [深度克隆](#jump2)**  

### <span id="jump1">1.函数防抖和函数节流</span>

:tropical_drink: 需求分析  
  控制用户请求接口的频率   

:sparkles: 解决方案
``` js
// 请求接口
async getTotalCoin(){
  const json = await this.getBuyContract();
  // 一般在这里结束loading
  // this.$store.commit('SET_ISLOADING',false);
},

watch: {
  selectMoney(val){
    if(!this.coin_callback){
      this.coin_callback = OX._utils.debounce(()=>{
        // 一般在这里触发loading
        // this.$store.commit('SET_ISLOADING',true);
        this.getTotalCoin()
      },300)
    }
    this.coin_callback()
  }
}
```
``` js
// 方法
function debounce(func, delay) {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

```


### <span id="jump2">2.深度克隆</span>

:tropical_drink: 需求分析  
  深度克隆   

:sparkles: 解决方案

``` js
// 方法
export function deepCopy(obj) {
  if (obj === null) return null
  if (typeof obj !== 'object') return obj
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  let newObj = new obj.constructor()
  for (let key in obj) {
    newObj[key] = deepCopy(obj[key])
  }
  return newObj
}

// 使用
let newArr = deepCopy(arr)
```