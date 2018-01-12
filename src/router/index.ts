import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Counter from '@/components/Counter.vue'
import ElementFramework from '@/components/ElementFramework.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/element',
      name: 'Element',
      component: ElementFramework
    }
  ]
})
