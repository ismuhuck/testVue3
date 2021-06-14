<template>
  <div :class="fullStyle">
    这是使用setup的组件
    <button :[key]="value" @click="handlePush" >按钮</button>
  </div>
  <!--  当组件中有多个根时 可以使用$attrs 来确定 哪些根使用该类 -->
  <p :class="$attrs.class" >使用attrs接受组件中的类</p>
  <ul>
    <!-- v3 将数组变更方法进行了包裹  其方法包括 push pop shift unshift splice sort reverse 可以进行动态的响应 -->
    <!-- 当 v-for 和 v-if 一同使用时 v-if具有更高的优先级 v-if 将无法访问v-for 中的变量 -->
    <li v-for="item in arrs" :key="item.name">
      {{item.name}}
    </li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        dis: 'disabled',
        key: 'data-title',
        value: 'val',
        error: null,
        arrs:[
          {
            name:'muhuck',
            age: 18
          },{
            name:'泰植',
            age: 23
          }
        ]
      }
    },
    methods:{
      handlePush(){
        this.arrs.push({
          name: 'wuyubing',
          age: 23
        })
      }
    },
    computed:{
      fullStyle(){
        return {
          active: !this.error,
          error: this.error
        }
      }
    }
  }
</script>
<style scoped>
</style>