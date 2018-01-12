<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  data () {
    return {
      msg: '欢迎使用TypeScript + Vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
`<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
`