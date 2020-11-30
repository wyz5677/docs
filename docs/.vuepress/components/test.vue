<template>
  <div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    function testAwait(){
      setTimeout(function(){
          console.log("testAwait");
      }, 1000);
    }
    
    async function helloAsync(){
      await testAwait();
      console.log("helloAsync");
    }
    helloAsync();
  },
  methods: {
  }
};
</script>
<style>
</style>