import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Admin from '../Admin.vue'
import Auth from '@/Auth.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: App },
    { path: '/auth', component: Auth },
    { path: '/admin', component: Admin },
  ],
})

export default router
