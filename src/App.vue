<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="page-link">
      <router-link to="/" @click.native="changeTitle('欢迎页面')">欢迎页面</router-link>
      <router-link to="/counter" @click.native="changeTitle('Counter页面')">Counter页面</router-link>
      <router-link to="/element" @click.native="changeTitle('ElementUI页面')">ElementUI页面</router-link>      
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'app',
  methods: {
    changeTitle(title) {
      let titleNode = document.getElementById('page-title')
      titleNode.textContent = title;
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
  padding: 2px 6px;
  text-align: center;
  color: #666;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-decoration: none;
}
</style>
