<template>
  <div>
    <button @click="refresh">戳我</button>
    <div v-if="donghuaShow">
      <img @touchstart.prevent='()=>null' 
      onclick="return false" 
      class="bounce"
      src="../public/assets/img/expand.png"
      alt="">
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
.bounce{
  animation: bounce-in 2s .5s ease-in-out infinite;
}

@keyframes bounce-in {
  20%{  transform: scale(.9);}
  40%{  transform: scale(1.05);}
  60%{  transform: scale(.95);}
  80%{  transform: scale(1);}
  100%{  transform: scale(1);}
}
</style>