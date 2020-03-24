import Msite from '@/pages/MSite/msite.vue'
import Order from '@/pages/Order/order.vue'
import Profile from '@/pages/Profile/profile.vue'
import Search from '@/pages/Search/search.vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/',
      redirect: 'msite'
    }
  ]
})
