---
title: js常用语法
---


# js常用语法

----
### 目录
**1. [promise](#jump1)**   
**2. [async](#jump2)**   


### <span id="jump1">1.promise</span>
:tropical_drink: 原理:   
在Promise的内部，有一个状态管理器的存在，有三种状态：pending、fulfilled、rejected. 
    
1 promise对象初始化状态为pending

2 当调用resolve(成功)，会由pending => fulfilled。此时向then的第一个参数成功回调函数传值.   

3 当调用reject(失败)，会由pending => rejected。此时向catch和then的第二个参数成功回调函数传值.   

4 当成功或者失败,状态凝固不可变了.   

产生原因:
Promise是一种用于解决异步问题的思路(它的出现主要是解决了异步回调地狱(回调函数多层嵌套)的问题)
Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果.

要点:

    1.如何使用?先创建一个Promise实例,然后调用实例的then或者catch方法拿到成功resolve或者失败reject的结果.

    2.Promise构造函数内部是同步的,默认创建实例时就会执行,而Promise的回调(then/catch)是异步的(微任务),只有实例执行到resolve/reject才会执行then/catch.(详情请参考宏任务微任务及js事件环)

    3.promise.then方法每次调用，都返回一个新的promise对象(注意不是之前那个实例) 所以可以链式写法（无论resolve还是reject都是这样）。
    
    4.catch相当于then(null,onRejected),前者只是后者的语法糖而已。(then方法里面有两个参数,第二个参数就是相当于.catch(err))

    5.如果第一个promise返回第二个promise,即第一个异步操作的结果是返回第二个异步操作,那么第一个promise的结果不由自己决定,而由第二个promise决定.

    6.Promise.resolve()方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。当再.then()便会立即执行,意义在于会在本次事件循环的结尾执行.

    7.finally()方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。

    8.Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
:sparkles: 基本使用,解释要点1
``` js
    const fn = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            let num = Math.ceil(Math.random() * 10) // 假设num为7
            if (num > 5) {
                resolve(num) //返回7
            } else {
                reject(num)
            }
        },2000)
    })
    fn.then((res)=>{
        console.log(res) // 7
    },(err)=>{
        console.log(err)
    })
```

:sparkles: 解释要点2
``` js
    const promise = new Promise((resolve, reject) => {
        console.log(1);
        resolve();
        console.log(2);
    });
    promise.then(() => {
        console.log(3);  //异步微任务 此轮事件宏任务结束后执行
    });
    console.log(4);

    // 输出结果为：1，2，4，3。
```

:sparkles: 解释要点 3
``` js
    getJSON("/post/1.json").then(function(post) {
        return getJSON(post.commentURL);
    }).then(function (comments) {
        console.log("resolved: ", comments);
    }, function (err){
        console.log("rejected: ", err);
    });
    // 上面代码中，第一个then方法指定的回调函数，返回的是另一个Promise对象。这时，第二个then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。如果变为resolved，就调用第一个回调函数，如果状态变为rejected，就调用第二个回调函数。
```

:sparkles: 解释要点5
``` js
    const p1 = new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error('fail')), 3000)
    })

    const p2 = new Promise(function (resolve, reject) {
        setTimeout(() => resolve(p1), 1000)
    })

    p2
    .then(result => console.log(result))
    .catch(error => console.log(error))
    // Error: fail

    // 上面代码中，p1是一个 Promise，3 秒之后变为rejected。p2的状态在 1 秒之后改变，resolve方法返回的是p1。由于p2返回的是另一个 Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。所以，后面的then语句都变成针对后者（p1）。又过了 2 秒，p1变为rejected，导致触发catch方法指定的回调函数。
```

:sparkles: 解释要点6
``` js
    // Promise.resolve('foo')
    // 等价于
    // new Promise(resolve => resolve('foo'))


    setTimeout(function () {
        console.log('three');
    }, 0);

    Promise.resolve().then(function () {
        console.log('two');
    });

    console.log('one');

    // one
    // two
    // three
```

:sparkles: 解释要点7
``` js
    promise
    .then(result => {···})
    .catch(error => {···})
    .finally(() => {···});
```

:sparkles: 解释要点8
``` js
    const p = Promise.all([p1, p2, p3]);
    // p的状态由p1、p2、p3决定，分成两种情况。
    // （1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
    // （2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。


    // 作为参数的几个promise对象一旦有一个的状态为rejected，则all的返回值就是rejected。
    var p1 = Promise.resolve(1),
        p2 = Promise.reject(2),
        p3 = Promise.resolve(3);
    Promise.all([p1, p2, p3]).then((res)=>{
        //then方法不会被执行
        console.log(results);
    }).catch((err)=>{
        //catch方法将会被执行，输出结果为：2
        console.log(err);
    });

    // 这段代码运行时，根据看谁跑的慢的原则，则会在10s之后输出[1,10,5]。over，all收工
    let p1 = new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('1s') //1s后输出
            resolve(1)
        },1000)
    })
    let p10 = new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('10s') //10s后输出
            resolve(10)
        },10000)
    })
    let p5 = new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('5s') //5s后输出
            resolve(5)
        },5000)
    })
    Promise.all([p1, p10, p5]).then((res)=>{
        console.log(res); // 最后输出
    })


    // vue中实际应用
    const PAY_MENTS = {
        "cn":["CNY_WEIXIN","CNY_ALIPAY","CNY_CHINAPAY","BTC","ETH","USDT","LTC"],
    }


    let promises = PAY_MENTS[cn].map(payment => {
          if(payment === 'CNY_ALIPAY' || payment === 'CNY_WEIXIN' || payment === 'CNY_CHINAPAY'){
            //   调取后台接口
            return this._previewCNY(payment)
          }else {
            //   调取后台接口
            return this._previewCOIN(payment)
          }
        })
    // 拿到所有promise执行完后的结果
    let result = await Promise.all(promises)
```

### <span id="jump2">2.async</span>
:tropical_drink: 作用:   
异步函数,同步等待.   
要点:

    1.async 函数返回的是一个 Promise 对象,如果在函数中 return 一个直接量，async 会把这个直接量通过 Promise.resolve() 封装成 Promise 对象。
    2.await针对所跟不同表达式的处理方式：如果一个 Promise 被传递给一个 await 操作符：await 会暂停执行，等待 Promise 对象 resolve，然后恢复 async 函数的执行并返回解析值。非 Promise 对象：直接返回对应的值。

:sparkles: 基本使用,解释要点1
``` js
    async function testAsync() {
        return "hello async";
    }

    const result = testAsync();
    // Promise { 'hello async' }
    console.log(result);
```

:sparkles: 基本使用,解释要点2
``` js
function testAwait(){
    // 只有返回Promise 对象await会暂停执行 否则会返回对应的值
   return new Promise((resolve) => {
       setTimeout(function(){
          console.log("testAwait");
          resolve();
       }, 1000);
   });
}

async function helloAsync(){
   await testAwait();
   console.log("helloAsync");
 }

// testAwait
// helloAsync
helloAsync();
```