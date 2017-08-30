import Vue from 'vue'
import Router from 'vue-router'
import Predator from '@/components/Predator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Predator',
      component: Predator
    }
  ]
})
