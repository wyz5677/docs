<template>
  <div>
    <div class="main">
      <div class="wave"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>
<style scoped>
.main .wave{
  width: 200px;
  height: 200px;
  padding: 10px;/* 设置内边距 */
  border-radius: 50%;/*添加圆角边框*/
  position: relative;
}
.wave{
  background-color: darkturquoise;
  overflow: hidden;/*隐藏溢出的内容*/
}
.wave:after{/*伪元素*/
  content: "";
  width: 300px;
  height: 300px;
  background: rgba(255, 255,255, 0.8);
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%,-60%);
  border-radius: 40%;
  animation: wave 5s linear infinite;/*将动画绑定*/
}
.wave::before{/*在水滴上添加一个名字*/
  content: "waterball";
  position: absolute;
  left: 50%;
  top: 0;
  color: darkturquoise;
  z-index: 99;/*层级*/
  transform: translate(-50%,30px);
  text-transform: uppercase;/*将文字变成大写*/
}
@keyframes wave{ /*添加旋转的动画*/
  100%{
    transform: translate(-50%,-60%) rotate(360deg);
  }
}
</style>