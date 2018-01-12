<template>
  <div class="counter">
    <h1>从Vuex中获取的数字是: {{number}}</h1>
    <button @click="incrementNumber(1)">点击同步加1</button>
    <button @click="incrementNumberAsync(1)">点击异步加1</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { State, Action, Mutation} from 'vuex-class'
  import * as types from '../store/mutations-types'

  @Component
  export default class Counter extends Vue {
    @State('initNumber') number
    @Mutation(types.INCREMENT_NUMBER) incrementNumber
    @Action('incrementNumberAsync') incrementNumberAsync
  }  
</script>

<style>

</style>