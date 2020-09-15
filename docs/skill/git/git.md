---
title: git常用操作
---


# git常用操作

----
## 目录
**1. [拉取已有项目开发](#jump1)**  
**1. [创建新分支开发](#jump2)**  

### <span id="jump1">1.拉取已有项目开发</span>
:sparkles: 例子1

``` js
    // 克隆项目到本地
    git clone https分支地址
    或 git clone -b 分支名 https分支地址
    // 下载依赖包
    npm I
    // 运行项目
    npm run dev   
```

### <span id="jump2">2.创建新分支开发</span>
:sparkles: 例子1

``` js
    // 切换到主分支 
    git checkout master 
    // 保持本地master代码最新
    git pull
    // 创建本地新分支
    git branch 分支名
    // 切换到本地新分支
    git checkout 分支名
    // 推送 因为原程分支没有这个 所以要如下推送 (推送后远程就有这个分支了)
    git push origin xxx
    // 最后绑定远程和本地分支的关系
    git branch --set-upstream-to=origin/分支名 分支名  
```