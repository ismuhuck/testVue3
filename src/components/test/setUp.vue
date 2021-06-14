<template>
  <div>
      setUp 测试
      {{year}}
      {{name}}
      {{parent}}
  </div>
</template>
<script>
import {  reactive, ref, toRefs } from 'vue'
  export default {
    props:{
      msg: String
    },
    data() {
      return {
        parent: this.msg, // 在data中可以直接使用props中的值   源码中的注册顺序为 prop > methods > data > computed > watch
      }
    },
    setup(props,ctx) {
      //  这里的props为响应式的 所以不能使用 ES6进行解构  会消除prop的响应性
      const { msg } = toRefs(props) // 可以通过toRefs 来完成
      console.log("ctx",ctx)
      // 定义一个响应式数据   ref可以用来定义单值响应式数据 也可以用来定义响应式对象
      var year = ref(0)
      // reactive 用来定义响应式对象
      let obj = reactive({
        name: 'muhuck'
      })
      setTimeout(() =>{
        year.value = 2021
        obj.name = 'jjj'
      },3000)
      return {
        year,
        // toRefs 用于将reactive对象转化为属性全部为ref对象的普通对象
        ...toRefs(obj)
      }
    }
  }
</script>
<style scoped>
</style>