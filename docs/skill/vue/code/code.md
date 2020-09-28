---
title: 写代码总结
---


# 写代码总结

----
## 目录
**1. [调用api模板](#jump1)**  
**2. [通过调用mutations控制全局Loading](#jump2)**  

### <span id="jump1">1.调用api模板</span>
:sparkles: 例子1
``` js
    // api/config.js:
    export const ERR_OK = "0"

    // 页面:
    import { ERR_OK } from "api/config"

    async _getOxElecConfigList(){
        let json = await getOxElecConfigList().catch(err => {});
        if(json['code'] !== ERR_OK) return;
        this.elecConfig=json['data']
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

<Vssue title="Vssue Demo" />