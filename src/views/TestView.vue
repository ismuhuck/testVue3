<template>
  <div>
    测试组件视图
    <!-- {{firstValue}}
    {{lastValue}} -->
    <!--  可以使用多个props 同步到不同的props -->
    <!-- <Test1
      data-status="active"
      class="aaa"
      @click="handleClick"
      @myClick="handleMyClick"
      v-model:firstValue.capitalize="firstValue"
      v-model:lastValue="lastValue"
    >
      <template v-slot:header>
        <div>
          herder 具名插槽
        </div>
      </template>
      <template v-slot:main>
        <div>
          main 具名插槽
        </div>
      </template>
      <template v-slot:default="slotDefault">
        <div>
          <span style="background: green">{{slotDefault.item}}</span>
        </div>
      </template>
    </Test1> -->
    <!-- <Provide></Provide>
    <button @click="handlePush">push数据</button> -->
    <setUps msg='组件值' id="testId"></setUps>
  </div>
</template>
<script>
import Test1 from "@coms/test/test1.vue";
import Provide from '@coms/test/provide.vue';
import setUps from '@coms/test/setUp.vue';
import { ref } from 'vue';
export default {
  components: {
    Test1,
    Provide,
    setUps
  },
  data() {
    return {
      firstValue:'firstValue',
      lastValue:'lastValue',
      arrays: ["aaaa","bbbb","ccccc"]
    }
  },
  provide(){
    //  如果想要访问 实例中的属性 需要将 provide  转换为访问对象的函数 此时数据并不是响应式
    return{
      arrayLength: this.arrays.length
    }
  },
  methods: {
    handleClick() {},
    handleMyClick(param) {
      console.log("自定义事件触发" + param);
    },
    handlePush(){
      this.arrays.push('new data')
      console.log(this.arrays)
    }
  },
};
</script>
<style scoped>
</style>