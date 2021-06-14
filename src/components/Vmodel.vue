<template>
  <div @click="$emit('update:message','改变')">
    这是V-model 组件{{message}}
  </div>
</template>
<script>
  export default {
    props:{
      //  默认接收的属性名为 modelValue
      message:{
        type: String
      }
    },
    beforeCreate() {
      console.log("beforeCreate")
    },
    created(){
      console.log('created')
    },  
    setup(props) {
      console.log('setup')
    }
  }
</script>
<style scoped>
</style>