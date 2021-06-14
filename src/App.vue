<template>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" @myclick="onMyclick" ref="Hw" /> -->
  <router-view></router-view>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import { ref } from "vue";
const Hw = ref(null) 
console.log(111)
function onMyclick(params){
  console.log('方法被调用'+params)
  Hw.value.someMethods()
}

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>

</style>
