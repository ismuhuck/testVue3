<template>
  <div>
    <HelloWord msg="你好"></HelloWord>
    <p>{{$store.state.counter}}</p>
  </div>
</template>
<script setup>
  import HelloWord from '@coms/HelloWorld.vue'

</script>
<style scoped>
</style>