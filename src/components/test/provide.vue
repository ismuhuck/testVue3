<template>
  <div>
    {{arrayLength}}
  </div>
</template>
<script>
  export default {
    inject:['arrayLength'],
    created(){
      console.log('length',this.arrayLength)
    }
  }
</script>
<style scoped>
</style>