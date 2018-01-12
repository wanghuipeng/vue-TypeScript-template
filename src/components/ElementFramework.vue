<template>
  <div class="element-framework">
    <h3>以下是ElementUI的组件</h3>
    <ul>
      <li>
        <el-button>默认按钮</el-button>
      </li>
      <li>
        <el-button @click="alertMessage">点击弹出消息</el-button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  
  @Component 
  export default class ElementFramework extends Vue {
    message: string = '点我干啥?'
    alertMessage() {
      this.$message({
        message: this.message,
        type: 'success'
      });
    }
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
  }
  ul li {
    margin-top: 20px;
  }
</style>
