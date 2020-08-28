---
title: 写代码总结
---


# 写代码总结

----
## 目录
**1. [调用api模板](#jump1)**  

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