<template>
  <!-- <h1 @click="onClick">{{ msg }} </h1>
  <Some class="class1"></Some>
  <el-button>按钮</el-button> -->
  <p>{{state.count}}{{msg1}}</p>
  <Vmodel v-model:message="msg1"></Vmodel>
</template>

<script setup>
//  setup script

import { defineEmit, defineProps, reactive, ref, useContext } from 'vue'

//  1. 直接导入组件
import Some from '@coms/Some.vue'
import Vmodel from '@coms/Vmodel.vue'

// 2.属性定义
defineProps({
  msg: String
})
// 3.获取上下文
const ctx = useContext()
ctx.expose({
  someMethods(){
    console.log(" from HellWord ")
  }
})

// 4. 定义向外暴露的事件
const emit = defineEmit(['myclick'])
const onClick = () => {
  emit('myclick','参数')
}

let msg1 = ref('数据')
const state = reactive({ count: 0 })

// 获取请求数据
// fetch('/api/getUsers')
// .then((res) => res.json()).then((data)=> console.log("data",data))
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
