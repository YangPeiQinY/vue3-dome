import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/Index.vue'
import User from '../views/User.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/user',
          name: 'User',
          component: User,
        }
      ]
    }
  ]
})

export default router
