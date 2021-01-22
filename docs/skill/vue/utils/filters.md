---
title: vue中实用工具过滤器
---

## 目录
**1. [金钱加逗号](#jump1)**  
**2. [保留小数位](#jump2)**  
**3. [格式化时间](#jump3)**  

### <span id="jump1">1.金钱加逗号</span>

:tropical_drink: 需求分析  
  金钱补逗号  

:sparkles: 解决方案
``` js
Vue.filter('formatMoney',function(number){
  if (number.length <= 3)
    return (number == '' ? '0' : number);
  else {
    let mod = number.length % 3;
    let output = (mod == 0 ? '' : (number.substring(0, mod)));
    for (let i = 0; i < Math.floor(number.length / 3); i++) {
      if ((mod == 0) && (i == 0))
        output += number.substring(mod + 3 * i, mod + 3 * i + 3);
      else
        output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
    }
    return (output);
  }
})

// 使用
{{abc + '' | formatMoney}}
```


### <span id="jump2">2.保留小数位</span>

:tropical_drink: 需求分析  
  保留小数位  

:sparkles: 解决方案
``` js
Vue.filter('fixed', function (value, type) {
  if((value+"").includes("*")) return value
  value = (value / 1) || 0
  if(value < 0){
    return "0"
  }

  if (typeof value == 'number') {
    if(value === 0){
      return '0'
    }
    return value.toFixed(type)
  } else {
    return '';
  }
})

// 使用
{{abc | fixed(4)}}
```


### <span id="jump3">3.格式化时间</span>

:tropical_drink: 需求分析  
  格式化时间  

:sparkles: 解决方案
``` js
Vue.filter('date', function (value,type = 'YYYY-MM-DD-hh-mm-ss') {
  var inputTime = value * 1000;
  var date = new Date(inputTime);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  if(type === 'YYYY-MM-DD-hh-mm-ss'){
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
  }if(type === 'YYYY-MM-DD hh:mm'){
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute 
  }else if(type === 'hh-mm'){
    return h + ':' + minute
  }else if(type === 'hh-mm-ss'){
    return h + ':' + minute + ':' + second
  }else if(type === 'YYYY-MM-DD'){
    return y + '-' + m + '-' + d
  }else if(type === 'YYYY-MM-DD-hh-mm'){
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute
  }else if(type === 'MM-DD'){
    return m/1 + "月" + d/1 + "日"
  }else if (type === 'YYYY/MM/DD'){
    return y + '/' + m + '/' + d
  }
  
})

// 使用
{{abc | date('YYYY-MM-DD')}}
```