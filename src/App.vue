<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="page-link">
      <router-link to="/" @click="changeTitle('欢迎页面')">欢迎页面</router-link>
      <router-link to="/counter" @click="changeTitle('Counter页面')">Counter页面</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'app',
  methods: {
    changeTitle(title) {
      let titleNode = document.getElementsByTagName('title');
      console.log(titleNode,1)
      title.innerText = title;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.page-link a {
  display: inline-block;
  width: 98px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  color: #666;
  font-weight: bold;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-decoration: none;
}
</style>
