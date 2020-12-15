---
title: 面试题
---


# js常用语法

----
### 目录
**1. [写一个方法去掉字符串中的空格](#jump1)**   
**2. [圣杯布局和双飞翼布局](#jump2)**   
**3. [用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值](#jump3)**   
**4. [字符串大小写切换的方法](#jump4)**   


### <span id="jump1">1.写一个方法去掉字符串中的空格</span>
:sparkles: 例子1
``` js
  Regex: string.replace(/\s/g, '')
  join: string.split(' ').join('')
```


### <span id="jump2">2.圣杯布局和双飞翼布局</span>
:sparkles: 例子1
``` js
//   作用：圣杯布局和双飞翼布局解决的问题是一样的，就是两边顶宽，中间自适应的三栏布局，中间栏要在放在文档流前面以优先渲染。
//   区别：圣杯布局，为了中间div内容不被遮挡，将中间div设置了左右padding-left和padding-right后，将左右两个div用相对布局position: relative并分别配合right和left属性，以便左右两栏div移动后不遮挡中间div。双飞翼布局，为了中间div内容不被遮挡，直接在中间div内部创建子div用于放置内容，在该子div里用margin-left和margin-right为左右两栏div留出位置。

// 圣杯布局代码：

<body>
<div id="hd">header</div>
<div id="bd">
  <div id="middle">middle</div>
  <div id="left">left</div>
  <div id="right">right</div>
</div>
<div id="footer">footer</div>
</body>

<style>
#hd{
    height:50px;
    background: #666;
    text-align: center;
}
#bd{
    /*左右栏通过添加负的margin放到正确的位置了，此段代码是为了摆正中间栏的位置*/
    padding:0 200px 0 180px;
    height:100px;
}
#middle{
    float:left;
    width:100%;/*左栏上去到第一行*/
    height:100px;
    background:blue;
}
#left{
    float:left;
    width:180px;
    height:100px;
    margin-left:-100%;
    background:#0c9;
    /*中间栏的位置摆正之后，左栏的位置也相应右移，通过相对定位的left恢复到正确位置*/
    position:relative;
    left:-180px;
}
#right{
    float:left;
    width:200px;
    height:100px;
    margin-left:-200px;
    background:#0c9;
    /*中间栏的位置摆正之后，右栏的位置也相应左移，通过相对定位的right恢复到正确位置*/
    position:relative;
    right:-200px;
}
#footer{
    height:50px;
    background: #666;
    text-align: center;
}
</style>

// 双飞翼布局代码：

<body>
<div id="hd">header</div> 
  <div id="middle">
    <div id="inside">middle</div>
  </div>
  <div id="left">left</div>
  <div id="right">right</div>
  <div id="footer">footer</div>
</body>

<style>
#hd{
    height:50px;
    background: #666;
    text-align: center;
}
#middle{
    float:left;
    width:100%;/*左栏上去到第一行*/     
    height:100px;
    background:blue;
}
#left{
    float:left;
    width:180px;
    height:100px;
    margin-left:-100%;
    background:#0c9;
}
#right{
    float:left;
    width:200px;
    height:100px;
    margin-left:-200px;
    background:#0c9;
}

/*给内部div添加margin，把内容放到中间栏，其实整个背景还是100%*/ 
#inside{
    margin:0 200px 0 180px;
    height:100px;
}
#footer{  
   clear:both; /*记得清楚浮动*/  
   height:50px;     
   background: #666;    
   text-align: center; 
} 
</style>
```


### <span id="jump3">3.用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值</span>
:sparkles: 例子1
``` js
    var arr = new Array(5);
    var num = randomNumber();
    var i = 0;
    randomArr(arr,num);
    function randomArr(arr,num) {
        if (arr.indexOf(num)< 0){
            arr[i] = num;
            i++;
        } else {
            num = randomNumber();
        }
        if (i>=arr.length){
            console.log(arr);
            return;
        }else{
            randomArr(arr,num)
        }
    }
    function randomNumber() {
        return Math.floor(Math.random()*31 + 2)
    }
```

### <span id="jump4">4.字符串大小写切换的方法</span>
:sparkles: 例子1
``` js
    function caseConvert(str){
        return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2)=>{
            return `${s1.toUpperCase()}${s2.toLowerCase()}`
        })
    }
caseConvert('AsA33322A2aa') //aSa33322a2AA
```