import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/Index.vue'
import User from '../views/User.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
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
