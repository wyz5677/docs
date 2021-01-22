---
title: js常用语法
---


# js常用语法

----
### 目录
**1. [js控制css](#jump1)**   
**2. [js声明提升和声明方式的差别](#jump2)**   
**3. [bind,call,apply](#jump3)**   


### <span id="jump1">1.js控制css</span>
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
:sparkles: 进阶封装
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

### <span id="jump2">2.js声明提升和声明方式的差别</span>

:tropical_drink: 解释    
    var有声明提升,支持反复声明,是函数作用域,如在全局作用域中声明会属于window的属性   
    let,const无声明提升,不支持反复声明,是块级作用域,如在全局作用域中声明的变量不会成为window对象的属性



:sparkles: var的声明提升
``` js
    // 这就是所谓的“提升”（hoist），也就是把所有变量声明都拉到函数作用域的顶部。
    function foo() {
        console.log(age);
        var age = 26;
    }
    foo(); // undefined   而不是报错
    // 是因为等同如下代码
    function foo() {
        var age;
        console.log(age);
        age = 26;
    }
    foo(); // undefined

```

:sparkles: var支持反复声明

``` js
    // 支持反复声明
    function foo() {
        var age = 16;
        var age = 26;
        var age = 36;
        console.log(age);
    }
    foo(); // 36

```

:sparkles: 经典面试

``` js
    for (var i = 0; i < 5; ++i) {
        setTimeout(() => console.log(i), 0)
    }
    // 你可能以为会输出0、1、2、3、4
    // 实际上会输出5、5、5、5、5

    for (let i = 0; i < 5; ++i) {
        setTimeout(() => console.log(i), 0)
    }
// 会输出0、1、2、3、4
```

:sparkles: const注意

``` js
    // const 声明的限制只适用于它指向的变量的引用。换句话说，如果 const 变量引用的是一个对象，那么修改这个对象内部的属性并不违反 const 的限制。
    const person = {};
    person.name = 'Matt'; // ok

    for (const i = 0; i < 10; ++i) {} // 报错 TypeError：给常量赋值
```


### <span id="jump3">3.bind,call,apply</span>

:tropical_drink: 解释    
    在 javascript 中，call 和 apply 都是为了改变某个函数运行时的上下文（context）而存在的，换句话说，就是为了改变函数体内部 this 的指向。



:sparkles: Function.prototype.bind()
``` js
    // 如下例子 因为b方法是a调用的 所以b方法内的第一层this是指向a 
    // b方法内部直接调用func,而func因为不是任何对象调用,所以内部this指向window  那么如何让func内部this指向a?
    var a = {
        b: function() {
            console.log(this.c); //hello  
            var func = function() {
                console.log(this.c); //undefined
            }
            func();
        },
        c: 'hello'
    }
    a.b();

    // 方法一: 使用参数_this
    var a = {
        b: function() {
            var _this = this; // 通过赋值的方式将this赋值给that
            var func = function() {
                console.log(_this.c);
            }
            func();
        },
        c: 'hello'
    }
    a.b(); // hello
    console.log(a.c); // hello

    // 方法二: 使用bind()

    // 使用bind方法一
    var a = {
        b: function() {
        var func = function() {
            console.log(this.c);
        }.bind(this);
        func();
        },
        c: 'hello'
    }
    a.b(); // hello
    console.log(a.c); // hello
    
    // 使用bind方法二
    var a = {
        b: function() {
        var func = function() {
            console.log(this.c);
        }
        func.bind(this)();
        },
        c: 'hello'
    }
    a.b(); // hello

    // 特殊例子 这里直接把a.b也就是一个方法赋值给了d 赋值后其内部的this已经不指向a了
    c = 10;
    var a = {
      b: function () {
        console.log(this); //window
        var func = function () {
          console.log(this.c); //10
        }.bind(this);
        func();
      },
      c: 'hello'
    }
    var d = a.b;
    d();

    // 实用场景 vue
    methods:{
        MarqueeTrigger(){
            this.myvar=setInterval(this.Marquee.bind(this),50);
        },
        Marquee(){
            this.$refs.BOX2.innerHTML=this.$refs.BOX1.innerHTML;
            if(this.$refs.ref_n1.scrollLeft-this.$refs.BOX2.offsetWidth>=0){
            this.$refs.ref_n1.scrollLeft-=this.$refs.BOX1.offsetWidth;
            }
            else{
                this.$refs.ref_n1.scrollLeft++;
            }
        },
    }
```
