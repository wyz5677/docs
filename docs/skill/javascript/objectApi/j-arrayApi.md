---
title: 数组常用api
---


# 数组常用api

----
### 目录
**1. [数组.filter()](#jump1) 创建一个新的数组，检查指定数组中符合条件的所有元素(项)组成一个新数组。**  
**2. [数组.find()](#jump2) 返回符合回调函数的第一个元素的值。**   
**3. [数组.reduce()](#jump3) 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始缩减，最终为一个值。**

### <span id="jump1">1.数组.filter()</span>
:sparkles: 例子1
``` js
    newArr = arr.filter(symbol => symbol.ori_name.includes('abc'))
```
:sparkles: 例子2
``` js
    newArr = arr.filter(age => age>18)
```

### <span id="jump2">2.数组.find()</span>
![avatar](./img/find.png)

### <span id="jump3">3.数组.reduce()</span>
![avatar](./img/reduce.png)
<br/>
:sparkles: 例子1
``` js
    <!-- 初始化货币,加','逗号运算符表示只返回','运算符右边的pre -->
    resultPriceObj = ["BTC","ETH","USDT","LTC","USD_KOINAL"].reduce((pre,item,current) => (pre[item] = 0,pre),{})
    <!-- {BTC: 0, ETH: 0, USDT: 0, LTC: 0, USD_KOINAL: 0} -->
```

:sparkles: 例子2
``` js
    <!-- 数组求和 -->
    let arr = [1,10,30,1000]
    let total = arr.reduce((pre,item,index,arr)=>{
        console.log(pre,item,index,arr);
        <!-- 0 1 0 (4) [1, 10, 30, 1000] -->
        <!-- 12 1 10 1 (4) [1, 10, 30, 1000] -->
        <!-- 12 11 30 2 (4) [1, 10, 30, 1000] -->
        <!-- 12 41 1000 3 (4) [1, 10, 30, 1000] -->
        return pre + item
    },0)
    console.log(total,'total');
    <!-- 1041 "total" -->
```

:sparkles: 例子3
``` js
    <!-- 找到数组最大值 -->
    let arr = [1,3,4,5,6,7,9]
    let max = arr.reduce((pre,item,index,arr)=>{
        return Math.max(pre,item)
    },0)
    console.log(max,'max');
    <!-- 9 "max" -->
```

:sparkles: 例子4
``` js
    <!-- 单层数组去重 -->
    let arr = [1,3,4,5,6,7,9,1,2,1,1,12,5]
    let newArr = arr.reduce((pre,item,index,arr)=>{
        pre.indexOf(item) === -1 && pre.push(item)
        return pre
    },[])
    console.log(newArr,'newArr');
    <!-- [1, 3, 4, 5, 6, 7, 9, 2, 12] "newArr" -->
```

:sparkles: 例子5
``` js
    // 计算数组中每个元素出现次数
    let returnObj = {}
    let arr = ['hash','piter','angle','piter']
    let newObj = arr.reduce((pre,item,index,arr)=>{
        if(item in pre){
            pre[item]++
        }else {
            pre[item]=1
        }
        return pre
    },returnObj)
    //都可以拿到 {hash: 1, piter: 2, angle: 1} "newObj"
    console.log(returnObj,'returnObj');
    // {hash: 1, piter: 2, angle: 1} "newObj"
    console.log(newObj,'newObj');
```

:sparkles: 例子6
``` js
    // 判断传入数值在数组的某个阶段中 如传600 就是5
    function abc(num){
        let line = [10,30,50,100,500,1000,5000,10000]
        if(num >= 10000) return 8
        let data = 0
        line.reduce((pre,item,index)=>{
            if( num >= pre && num <= item){
                data = index
            }
            return item
        })
        return data
    }
    console.log(abc(600))
```