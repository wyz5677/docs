---
title: js常用语法
---


# js常用语法

----
## js控制css
### 常用
:sparkles: 控制ref
``` js
    this.$refs.otherMoneyRef.style.right='100px'
```
:sparkles: 控制dom
``` js
    document.getElementById("box1").style.right='100px'
```
:sparkles: 控制伪元素
``` js
    document.styleSheets[0].addRule('.otherMoney:before', 'left:13% !important');
```
### 进阶封装
``` js
    _toSetStyle(el,attrs){
        if(!el) return
        for(let key in attrs){
            let val = attrs[key]
            if(key === 'transform'){
            el.style[key] = val
            }else if (key === 'opacity'){
            el.style[key] = val
            }else{
            el.style[key] = `${this.scale * val}px`
            }
        }
    }
    //使用
    this._toSetStyle(this.$refs['swiperContainer'],{
        width:700,
        height:686,
        opacity:1
    })
```