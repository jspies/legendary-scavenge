import Vue from 'vue'
import Router from 'vue-router'
import Predator from '@/components/Predator'
import Materials from '@/components/Materials'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Predator',
      component: Predator
    },
    {
      path: '/materials',
      name: 'Materials',
      component: Materials
    }
  ]
})
