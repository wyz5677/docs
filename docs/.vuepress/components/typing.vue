<template>
  <div>
    <div class="main">
      <button @click="refresh">戳我</button>
      <div v-if="donghuaShow">
		    <span>关注Code程序人生微信公众号~~~</span>
      </div>
		</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      donghuaShow:true
    };
  },
  methods: {
    refresh(){
      this.donghuaShow=false
      this.$nextTick(()=>{
        this.donghuaShow=true
      })
    }
  }
};
</script>
<style scoped>
main {
  width: 500px; 
  height: 229px;
  display: flex;
  justify-content: center;
  align-items: center;
}
span {
  display: inline-block;
  width: 500px; 
  font: bold 200% Consolas, Monaco, monospace;   /*等宽字体*/
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500;
  border-right: 1px solid transparent;
  animation: typing 2s steps(21), caret .5s steps(1) infinite;
}
@keyframes typing{
  from {
    width: 0;
  }
}
@keyframes caret{
  50% { border-right-color: currentColor}
}
</style>