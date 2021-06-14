<template>
  <div>
    测试文件1
    <span v-bind="$attrs" @click="$emit('myClick','参数')">span</span>
    <br>
    <input type="text" :value="firstValue" @input="changeEmit">
    <br>
    <input type="text" :value="lastValue" @input="$emit('update:lastValue',$event.target.value)">
    <br>
    <slot></slot>
    <slot name='header'></slot>
    <slot name='main'></slot>
  </div>
  <!--  多个根节点不具备自动继承属性的行为 需要显示的使用v-bind进行绑定 -->
  <div :class="$attrs.class">
    <ul>
      <li v-for="item in arrs" :key="item">
        <slot :item='item'>{{item}}</slot> 
        <!-- 作用域插槽 插槽内容可用于访问子组件数据 -->
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props:{
      firstValue:{
        type: String,
        default: ''
      },
      //  v-model capitalize 自定义修饰符
      firstValueModifiers: {
        default:() => ({ })
      },
      lastValue:{
        type: String,
        default :''
      }
    },
    data() {
      return {
        arrs:["aaaa","bbbb","cccc"]
      }
    },
    methods:{
      changeEmit(e){
        let value = e.target.value
        if(this.firstValueModifiers.capitalize){
          value = value.charAt(0).toUpperCase() + value.slice(1)
        }
        this.$emit("update:firstValue",value)
      }
    },
    inheritAttrs: false, // 禁用attrs的自动继承
    emits:['myClick','update:firstValue','update:lastValue'],
    created(){
      // console.log(this.$attrs);
      // console.log('this.$slots.header',this.$slots.default)
    }
  }
</script>
<style scoped>
</style>