<template>
  <div>
    <button @click="refresh">戳我</button>
    <div v-if="donghuaShow">
      <div   class="Flex-fadeIn1" style="opacity: 0;"> 中华人民共和国</div>
      <div   class="Flex-fadeIn2" style="opacity: 0;"> 中华人民共和国</div>
      <div   class="Flex-fadeIn3" style="opacity: 0;"> 中华人民共和国</div>
      <div   class="Flex-fadeIn4" style="opacity: 0;"> 中华人民共和国</div>
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
<style>
    @-webkit-keyframes fadeIn {
    0% {
    opacity: 0; 
    }
    50% {
    opacity: 0.5; 
    }
    100% {
    opacity: 1; 
    }
    }
    
    .Flex-fadeIn1
    {
    animation: fadeIn 2s 0s 1 forwards;
    }
    .Flex-fadeIn2
    {
    animation: fadeIn 2s 1s 1 forwards;
    }
    .Flex-fadeIn3
    {
    animation: fadeIn 2s 2s 1 forwards;
    }
    .Flex-fadeIn4
    {
    animation: fadeIn 2s 3s 1 forwards;
    }
</style>