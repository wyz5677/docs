---
title: 实用工具
---

## 目录
**1. [解析查询字符串](#jump1)**  
**2. [类型转换](#jump2)**  

### <span id="jump1">1.解析查询字符串</span>

:tropical_drink: 需求分析  
  解析查询字符串

:sparkles: 解决方案
``` js
// 这个函数首先删除了查询字符串开头的问号，当然前提是 location.search 必须有内容。解析后
// 的参数将被保存到 args 对象，这个对象以字面量形式创建。接着，先把查询字符串按照 & 分割成数
// 组，每个元素的形式为 name=value 。 for 循环迭代这个数组，将每一个元素按照 = 分割成数组，这
// 个数组第一项是参数名，第二项是参数值。参数名和参数值在使用 decodeURIComponent() 解码后
// （这是因为查询字符串通常是被编码后的格式）分别保存在 name 和 value 变量中。最后， name 作
// 为属性而 value 作为该属性的值被添加到 args 对象。
  let getQueryStringArgs = function() {
    // 取得没有开头问号的查询字符串
    let qs = (location.search.length > 0 ? location.search.substring(1) : ""),
    // 保存数据的对象
    args = {};
    // 把每个参数添加到args对象
    for (let item of qs.split("&").map(kv => kv.split("="))) {
      let name = decodeURIComponent(item[0]),
      value = decodeURIComponent(item[1]);
      if (name.length) {
        args[name] = value;
      }
    }
    return args;
  }

  // 使用
  // 假设查询字符串为?q=javascript&num=10
  let args = getQueryStringArgs();
  alert(args["q"]); // "javascript"
  alert(args["num"]); // "10"





  // 其他的做法
  let qs = "?q=javascript&num=10";
  let searchParams = new URLSearchParams(qs);
  alert(searchParams.toString()); // " q=javascript&num=10"
  searchParams.has("num"); // true
  searchParams.get("num"); // 10
  searchParams.set("page", "3");
  alert(searchParams.toString()); // " q=javascript&num=10&page=3"
  searchParams.delete("q");
  alert(searchParams.toString()); // " num=10&page=3"

  let qs = "?q=javascript&num=10";
  let searchParams = new URLSearchParams(qs);
  for (let param of searchParams) {
  console.log(param);
  }
  // ["q", "javascript"]
  // ["num", "10"]

```

### <span id="jump2">2.类型转换</span>

:tropical_drink: 需求分析  
  类型转换

:sparkles: 解决方案
``` js
  // 字符串转数字
  let abc = '123'
  let newAbc = abc / 1
```