---
title: 写代码总结
---


# 写代码总结

----
## 目录
**1. [调用api模板](#jump1)**  
**2. [通过调用mutations控制全局Loading](#jump2)**  
**3. [code优化](#jump3)**  

### <span id="jump1">1.调用api模板</span>
:sparkles: 例子1
``` js
    // api/config.js:
    export const ERR_OK = "0"

    // 页面:
    import { ERR_OK } from "api/config"

    async _getOxElecConfigList(){
        let res = await getOxElecConfigList().catch(err => {});
        if(res['code'] !== ERR_OK) return;
        this.elecConfig=res['data']
    }
```

### <span id="jump2">2.通过调用mutations控制全局Loading</span>
:sparkles: 例子1
``` js
    // app.vue:
    <div v-show='$store.state.ISLOADING' style='position:fixed;top:50%;left:50%;transform: translateX(-50%) translateY(-50%);z-index: 2000;'>
      <vue-loading type="spiningDubbles" color="#00ceba" :size="{ width: '60px', height: '60px' }"></vue-loading>
    </div>

    //vuex中:state.js:
    ISLOADING:false,

    //mutationgs:
    [types.SET_ISLOADING](state,flag){
        state.ISLOADING = flag;
    },

    // 调用页面:
    import { mapMutations } from "vuex";
    // methods:
    ...mapMutations["SET_ISLOADING"],
    // 使用:
    this.$store.commit('SET_ISLOADING',true)
```

### <span id="jump3">3.code优化</span>
:sparkles: 常量使用const代替var 使用let替换变量，而不是var
``` js
    /* 旧方法 */
    var i = 1;

    /* 正确方式 */
    const i = 1;

    /* 不适当的*/
    var myVal = 1;
    for (var i; i < 10; i++){
    myVal = 1 + i;
    }

    /* 正确方式*/
    let myVal = 1;
    for (let i; i < 10; i++){
    myVal += i
    }
```

:sparkles: 声明对象
``` js
    /* 
    旧方法
    The Object() class makes an unnecessary function call
    */
    const myObject = new Object();
    /* 正确方式*/
    const myObject = {};
```

:sparkles: 连接字符串
``` js
    /* 旧方法 */
    const myStringToAdd = "world";
    const myString = "hello " + myStringToAdd;


    /* 正确方式*/
    const myStringToAdd = "world";
    const myString = `hello ${myStringToAdd}`;
```

:sparkles: 使用对象方法简写
``` js
    /* 不适当 */
    const customObject = {
        val: 1,
        addVal: function () {
            return customObject.val + 1;
        }
    }

    /* 正确方式*/
    const customObject = {
        val: 1,
        addVal(){
            return customObject.val++
        }
    }
```

:sparkles: 创建对象的值
``` js
    /* 旧方法*/
    const value = 1;
    const myObject = {
        value: value
    }
    /* 正确方式*/
    const value = 1;
    const myObject = {
        value
    }
```

:sparkles: 给对象赋值
``` js
    /* 旧方法 */
    const object1 = { val: 1, b: 2 };
    let object2 = { d: 3, z: 4 };
    object2.val = object1.val;
    object2.b = object1.b;

    /* 正确方式 */
    const object1 = { val: 1, b: 2 };
    const object2 = { ...object1, d: 3, z: 4 }

    /* 正确方式 */
    const object2 = Object.assign({},object1,{d: 3, z: 4})
```

:sparkles: 给数组赋值
``` js
    /* 不适当*/
    const myArray = [];
    myArray[myArray.length] = "hello world";


    /* 正确方式 */
    const myArray = [];
    myArray.push('Hello world');
```

:sparkles: 连接数组
``` js
    /* 不适当*/
    const array1 = [1,2,3,4];
    const array2 = [5,6,7,8];
    const array3 = array1.concat(array2);


    /* 正确方式 */
    const array1 = [1,2,3,4];
    const array2 = [5,6,7,8];
    const array3 = [...array1, ...array2]
```

:sparkles: 获取函数参数对象的多个属性
``` js
    /* 不适当*/
    function getFullName(client){
        return `${client.name} ${client.last_name}`;
    }

    /* 正确方式 */
    function getFullName({name, last_name}){
        return `${name} ${last_name}`;
    }
```

:sparkles: 从对象获取值
``` js
    /* 不适当*/
    const object1 = { a: 1 , b: 2 };
    const a = object1.a;
    const b = object1.b;

    /* 正确方式 */
    const object1 = { a: 1 , b: 2 };
    const { a, b } = object1;
```

:sparkles: 创建函数
``` js
    /* 老办法，但很好 */
    function myFunc() {}

    /* 很好*/
    const myFunc = function() {}

    /* 最好 */
    const myFunct = () => {}
```

:sparkles: 函数默认值
``` js
    /* 不适当*/
    const myFunct = (a, b) => {
        if (!a) a = 1;
        if (!b) b = 1;
        return { a, b };
    }

    /* 正确方式 */
    const myFunct = (a = 1, b = 1) => {
        return { a, b };
    }
```

:sparkles: 使用reduce代替forEach和for来求和
``` js
    /* 不适当*/
    const values = [1, 2, 3, 4, 5];
    let total = 0;
    values.forEach( (n) => { total += n})

    /* 不适当*/
    const values = [1, 2, 3, 4, 5];
    let total = 0;
    for (let i; i < values.length; i++){
        total += values[i];
    }

    /* 正确方式 */
    const values = [1, 2, 3, 4, 5];
    const total = values.reduce((total, num) => total + num);
```

:sparkles: 是否存在数组中
``` js
    /* 不适当*/
    const myArray = [{a: 1}, {a: 2}, {a: 3}];
    let exist = false;
    myArray.forEach( item => {
        if (item.a === 2) exist = true
    })

    /* 正确方式 */
    const myArray = [{a: 1}, {a: 2}, {a: 3}];
    const exist = myArray.some( item => item.a == 2)
```

:sparkles: 布尔值的快捷方式
``` js
    /* 不适当*/
    const a = 5;
    let b;
    if (a === 5){
        b = 3;
    } else {
        b = 2;
    }

    /* 正确方式 */
    const a = 5;
    const b = a === 5 ? 3 : 2;
```